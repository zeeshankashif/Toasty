import { useState, useEffect, useRef, Component, ErrorInfo, ReactNode } from 'react';
import { 
  onAuthStateChanged, 
  User,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import { 
  collection, 
  query, 
  where, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  serverTimestamp, 
  Timestamp,
  setDoc,
  getDoc,
  getDocs,
  deleteField
} from 'firebase/firestore';
import { 
  auth, 
  db, 
  signIn, 
  logOut,
  googleProvider
} from './firebase';
import { STOCK_RECIPES } from './stockRecipes';
import { 
  Recipe, 
  Household, 
  Category 
} from './types';
import { 
  extractRecipeFromUrl,
  generateRecipe,
  generateRecipeImage
} from './services/geminiService';
import { 
  Plus, 
  Search, 
  Filter, 
  Link as LinkIcon, 
  LogOut, 
  Users, 
  Star, 
  ChevronRight, 
  ChefHat, 
  X, 
  Loader2,
  Trash2,
  Edit2,
  Clock,
  Utensils,
  AlertCircle,
  Soup,
  Sparkles,
  Sun,
  Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Error Handling ---

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  // We don't throw here to avoid crashing the whole app, but we log it clearly
}

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-stone-50 text-center space-y-4">
          <AlertCircle className="w-12 h-12 text-red-500" />
          <h1 className="text-2xl font-serif font-bold text-stone-900">Something went wrong</h1>
          <p className="text-stone-500">We encountered an unexpected error. Please try refreshing the page.</p>
          <Button onClick={() => window.location.reload()}>Refresh App</Button>
        </div>
      );
    }
    return this.props.children;
  }
}

// --- Components ---

const Button = ({ className, variant = 'primary', ...props }: any) => {
  const variants = {
    primary: 'bg-stone-800 dark:bg-stone-100 text-stone-50 dark:text-stone-900 hover:bg-stone-700 dark:hover:bg-stone-200',
    secondary: 'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700',
    outline: 'border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-900',
    ghost: 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800',
    danger: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40'
  };
  return (
    <button 
      className={cn(
        'px-4 py-2 rounded-full font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant as keyof typeof variants],
        className
      )} 
      {...props} 
    />
  );
};

const Card = ({ children, className }: any) => (
  <div className={cn('bg-white dark:bg-stone-900 rounded-3xl p-6 shadow-sm border border-stone-100 dark:border-stone-800', className)}>
    {children}
  </div>
);

const Modal = ({ isOpen, onClose, title, children }: any) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling on body
      document.body.style.overflow = 'hidden';
      
      // Set aria-hidden on main content
      const mainContent = document.getElementById('main-content');
      if (mainContent) mainContent.setAttribute('aria-hidden', 'true');

      // Focus the modal
      modalRef.current?.focus();
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onCloseRef.current();
        if (e.key === 'Tab') {
          const focusableElements = modalRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements && focusableElements.length > 0) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            // If focus is outside the modal, bring it back in
            if (!modalRef.current?.contains(document.activeElement)) {
              firstElement.focus();
              e.preventDefault();
              return;
            }

            if (e.shiftKey) {
              if (document.activeElement === firstElement || document.activeElement === modalRef.current) {
                lastElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
              }
            }
          }
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        if (mainContent) mainContent.removeAttribute('aria-hidden');
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-900/40 dark:bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div 
        ref={modalRef}
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-stone-50 dark:bg-stone-900 rounded-2xl sm:rounded-[2rem] w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col shadow-2xl outline-none"
      >
        <div className="p-4 sm:p-6 border-b border-stone-200 dark:border-stone-800 flex justify-between items-center bg-white dark:bg-stone-900">
          <h2 id="modal-title" className="text-xl sm:text-2xl font-serif font-semibold text-stone-800 dark:text-stone-100 truncate pr-4">{title}</h2>
          <button onClick={onClose} className="p-1.5 sm:p-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors flex-shrink-0" aria-label="Close modal">
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-stone-400" />
          </button>
        </div>
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 text-stone-600 dark:text-stone-300">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [householdsLoading, setHouseholdsLoading] = useState(true);
  const [households, setHouseholds] = useState<Household[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const [selectedHousehold, setSelectedHousehold] = useState<Household | null>(null);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  
  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
  const [isHouseholdModalOpen, setIsHouseholdModalOpen] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [viewingRecipe, setViewingRecipe] = useState<Recipe | null>(null);

  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [isDeleteHouseholdConfirmOpen, setIsDeleteHouseholdConfirmOpen] = useState(false);

  const [importUrl, setImportUrl] = useState('');
  const [importError, setImportError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const [aiCategory, setAiCategory] = useState<Category>('Dinner');
  const [aiDetails, setAiDetails] = useState('');

  const [isDemoDisabledModalOpen, setIsDemoDisabledModalOpen] = useState(false);
  const [isDataDeletedModalOpen, setIsDataDeletedModalOpen] = useState(false);
  const [isFirstFamilyModalOpen, setIsFirstFamilyModalOpen] = useState(false);
  const [recipeFormError, setRecipeFormError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // --- Auth Flow States ---
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authName, setAuthName] = useState('');
  const [authTab, setAuthTab] = useState<'signin' | 'signup'>('signin');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccessMsg, setAuthSuccessMsg] = useState<string | null>(null);
  const [isAuthSubmitLoading, setIsAuthSubmitLoading] = useState(false);

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authEmail || !authPassword || !authName) {
      setAuthError("Please fill in all fields.");
      return;
    }
    setAuthError(null);
    setAuthSuccessMsg(null);
    setIsAuthSubmitLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, authEmail, authPassword);
      await updateProfile(userCredential.user, {
        displayName: authName
      });
      setAuthSuccessMsg("Account created successfully! Welcome to Toasty.");
      setTimeout(() => {
        setIsAuthModalOpen(false);
        // Reset states
        setAuthEmail('');
        setAuthPassword('');
        setAuthName('');
        setAuthSuccessMsg(null);
      }, 1500);
    } catch (err: any) {
      console.error("Sign up error:", err);
      if (err.code === 'auth/operation-not-allowed') {
        setAuthError("Email/Password Sign-In is not enabled yet in your Firebase console. Please go to your Firebase Console under 'Authentication' > 'Sign-in method' and enable the Email/Password provider!");
      } else if (err.code === 'auth/email-already-in-use') {
        setAuthError("This email address is already registered. Please sign in instead.");
      } else if (err.code === 'auth/weak-password') {
        setAuthError("Your password is too weak. Please use at least 6 characters.");
      } else if (err.code === 'auth/invalid-email') {
        setAuthError("Please provide a valid email address.");
      } else {
        setAuthError(err.message || "An error occurred during sign up.");
      }
    } finally {
      setIsAuthSubmitLoading(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authEmail || !authPassword) {
      setAuthError("Please fill in all fields.");
      return;
    }
    setAuthError(null);
    setAuthSuccessMsg(null);
    setIsAuthSubmitLoading(true);

    try {
      await signInWithEmailAndPassword(auth, authEmail, authPassword);
      setAuthSuccessMsg("Successfully signed in!");
      setTimeout(() => {
        setIsAuthModalOpen(false);
        // Reset states
        setAuthEmail('');
        setAuthPassword('');
        setAuthSuccessMsg(null);
      }, 1500);
    } catch (err: any) {
      console.error("Sign in error:", err);
      if (err.code === 'auth/operation-not-allowed') {
        setAuthError("Email/Password Sign-In is not enabled yet in your Firebase console. Please go to your Firebase Console under 'Authentication' > 'Sign-in method' and enable the Email/Password provider!");
      } else if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setAuthError("Invalid email or password. Please try again or create an account.");
      } else if (err.code === 'auth/invalid-email') {
        setAuthError("Please provide a valid email address.");
      } else {
        setAuthError(err.message || "An error occurred during sign in.");
      }
    } finally {
      setIsAuthSubmitLoading(false);
    }
  };

  const handleGoogleSignInInModal = async () => {
    setAuthError(null);
    setAuthSuccessMsg(null);
    setIsAuthSubmitLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      setAuthSuccessMsg("Successfully signed in with Google!");
      setTimeout(() => {
        setIsAuthModalOpen(false);
        setAuthSuccessMsg(null);
      }, 1500);
    } catch (err: any) {
      console.error("Google popup error:", err);
      if (err.code === 'auth/popup-blocked') {
        setAuthError("The sign-in popup was blocked by your browser. For standard Google Sign-In, please allow popups, or open this application in a new tab using the button in the top-right! Alternatively, use the Email Sign In options below.");
      } else {
        setAuthError("Google Sign-In was cancelled or failed in this iframe preview. We highly recommend using the Email/Password sign up & sign in options below, which work seamlessly in previews!");
      }
    } finally {
      setIsAuthSubmitLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
        try {
          const userDoc = await getDoc(doc(db, 'users', u.uid));
          if (!userDoc.exists()) {
            await setDoc(doc(db, 'users', u.uid), {
              displayName: u.displayName || 'Anonymous Chef',
              photoURL: u.photoURL || ''
            });
          }
        } catch (e) {
          console.error("Failed to create user profile in Firestore:", e);
        }

        // Cleanup old data (older than 24 hours)
        try {
          const twentyFourHoursAgo = Date.now() - 24 * 60 * 60 * 1000;
          let dataDeleted = false;

          const hQuery = query(collection(db, 'households'), where(`members.${u.uid}`, 'in', ['admin', 'member', 'viewer']));
          const hSnapshot = await getDocs(hQuery);
          
          for (const hDoc of hSnapshot.docs) {
            const hData = hDoc.data();
            const createdAt = hData.createdAt?.toMillis?.() || 0;
            
            if (createdAt > 0 && createdAt < twentyFourHoursAgo && hData.ownerId === u.uid && !hData.isStock) {
              try {
                const rQuery = query(collection(db, 'recipes'), where('householdId', '==', hDoc.id));
                const rSnapshot = await getDocs(rQuery);
                for (const rDoc of rSnapshot.docs) {
                  try {
                    await deleteDoc(doc(db, 'recipes', rDoc.id));
                  } catch (e) {
                    console.error("Failed to delete recipe", e);
                  }
                }
                
                await deleteDoc(doc(db, 'households', hDoc.id));
                dataDeleted = true;
              } catch (e) {
                console.error("Failed to delete household", e);
              }
            } else {
              const rQuery = query(collection(db, 'recipes'), where('householdId', '==', hDoc.id));
              const rSnapshot = await getDocs(rQuery);
              for (const rDoc of rSnapshot.docs) {
                const rData = rDoc.data();
                const rCreatedAt = rData.createdAt?.toMillis?.() || 0;
                if (rCreatedAt > 0 && rCreatedAt < twentyFourHoursAgo && !rData.isStock && (rData.authorId === u.uid || hData.ownerId === u.uid)) {
                  try {
                    await deleteDoc(doc(db, 'recipes', rDoc.id));
                    dataDeleted = true;
                  } catch (e) {
                    console.error("Failed to delete recipe", e);
                  }
                }
              }
            }
          }

          if (dataDeleted) {
            setIsDataDeletedModalOpen(true);
          }
        } catch (error) {
          console.error("Error cleaning up old data:", error);
        }
        setLoading(false);
      } else {
        // Automatically sign in anonymously if there is no user session
        try {
          await signInAnonymously(auth);
        } catch (error) {
          console.error("Anonymous authentication failed, using fallback guest user:", error);
          setUser({
            uid: 'local-guest-user',
            displayName: 'Guest Chef',
            photoURL: '',
            email: 'guest@toasty.local',
            emailVerified: true,
            isAnonymous: true,
            metadata: {},
            providerData: [],
            tenantId: null
          } as any);
          setLoading(false);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch Households
  useEffect(() => {
    if (!user) {
      setHouseholdsLoading(false);
      return;
    }
    if (user.uid === 'local-guest-user') {
      const stored = localStorage.getItem('toasty_households');
      if (stored) {
        try {
          const h = JSON.parse(stored);
          setHouseholds(h);
          setHouseholdsLoading(false);
          setSelectedHousehold(prev => {
            if (!prev) return h[0];
            const updated = h.find((hh: any) => hh.id === prev.id);
            return updated || h[0];
          });
          return;
        } catch (e) {
          console.error("Error parsing stored households:", e);
        }
      }
      const defaultH: Household = {
        id: 'local-default-household',
        name: 'My Kitchen',
        ownerId: 'local-guest-user',
        members: { 'local-guest-user': 'admin' }
      };
      setHouseholds([defaultH]);
      setHouseholdsLoading(false);
      setSelectedHousehold(defaultH);
      localStorage.setItem('toasty_households', JSON.stringify([defaultH]));
      
      // Write stock recipes for this local household
      const defaultRecipes = STOCK_RECIPES.map((r, idx) => ({
        ...r,
        id: `local-recipe-${idx}`,
        authorId: 'local-guest-user',
        householdId: 'local-default-household',
        createdAt: Timestamp.now()
      }));
      localStorage.setItem('toasty_recipes_local-default-household', JSON.stringify(defaultRecipes));
      return;
    }
    setHouseholdsLoading(true);
    const q = query(collection(db, 'households'), where(`members.${user.uid}`, 'in', ['admin', 'member', 'viewer']));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const h = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Household));
      setHouseholds(h);
      setHouseholdsLoading(false);
      if (h.length > 0) {
        setSelectedHousehold(prev => {
          if (!prev) return h[0];
          const updated = h.find(hh => hh.id === prev.id);
          return updated || h[0];
        });
      } else {
        setSelectedHousehold(null);
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'households');
    });
    return () => unsubscribe();
  }, [user]);

  // Fetch Recipes
  useEffect(() => {
    if (!user || !selectedHousehold) {
      setRecipes([]);
      return;
    }
    if (user.uid === 'local-guest-user') {
      const key = `toasty_recipes_${selectedHousehold.id}`;
      const stored = localStorage.getItem(key);
      if (stored) {
        try {
          const r = JSON.parse(stored);
          // Auto-seed missing STOCK_RECIPES to ensure homepage contains over 50 exquisite dishes
          if (r.length < 20) {
            const merged = [...r];
            const presentTitles = new Set(r.map((itm: any) => itm.title.toLowerCase()));
            STOCK_RECIPES.forEach((stock, sIdx) => {
              if (!presentTitles.has(stock.title.toLowerCase())) {
                merged.push({
                  ...stock,
                  id: `local-recipe-${selectedHousehold.id}-${Date.now()}-${sIdx}`,
                  authorId: 'local-guest-user',
                  householdId: selectedHousehold.id,
                  createdAt: Timestamp.now()
                } as Recipe);
              }
            });
            localStorage.setItem(key, JSON.stringify(merged));
            setRecipes(merged);
          } else {
            setRecipes(r);
          }
          return;
        } catch (e) {
          console.error("Error parsing local recipes:", e);
        }
      }
      // Seeding for brand new guest household
      const defaultRecipes = STOCK_RECIPES.map((r, idx) => ({
        ...r,
        id: `local-recipe-${selectedHousehold.id}-${idx}`,
        authorId: 'local-guest-user',
        householdId: selectedHousehold.id,
        createdAt: Timestamp.now()
      }));
      localStorage.setItem(key, JSON.stringify(defaultRecipes));
      setRecipes(defaultRecipes as Recipe[]);
      return;
    }
    const q = query(collection(db, 'recipes'), where('householdId', '==', selectedHousehold.id));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedRecipes = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Recipe));
      fetchedRecipes.sort((a, b) => {
        const timeA = a.createdAt?.toMillis?.() || Date.now();
        const timeB = b.createdAt?.toMillis?.() || Date.now();
        return timeB - timeA;
      });
      setRecipes(fetchedRecipes);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'recipes');
    });
    return () => unsubscribe();
  }, [user, selectedHousehold]);

  const handleCreateHousehold = async (name: string) => {
    if (!user) return;
    setIsProcessing(true);

    if (user.uid === 'local-guest-user') {
      const newId = `local-household-${Date.now()}`;
      const newH: Household = {
        id: newId,
        name,
        ownerId: 'local-guest-user',
        members: { 'local-guest-user': 'admin' }
      };
      
      const updatedHouseholds = [...households, newH];
      setHouseholds(updatedHouseholds);
      localStorage.setItem('toasty_households', JSON.stringify(updatedHouseholds));
      
      // Stock recipes for this household in localStorage
      const defaultRecipes = STOCK_RECIPES.map((r, idx) => ({
        ...r,
        id: `local-recipe-${newId}-${idx}`,
        authorId: 'local-guest-user',
        householdId: newId,
        createdAt: Timestamp.now()
      }));
      localStorage.setItem(`toasty_recipes_${newId}`, JSON.stringify(defaultRecipes));
      
      setSelectedHousehold(newH);
      setIsHouseholdModalOpen(false);
      setIsFirstFamilyModalOpen(true);
      setIsProcessing(false);
      return;
    }

    try {
      const newH = {
        name,
        ownerId: user.uid,
        members: { [user.uid]: 'admin' },
        createdAt: serverTimestamp()
      };
      const docRef = await addDoc(collection(db, 'households'), newH);
      
      // Add stock recipes to the new household
      for (const recipe of STOCK_RECIPES) {
        await addDoc(collection(db, 'recipes'), {
          ...recipe,
          authorId: user.uid,
          householdId: docRef.id,
          createdAt: serverTimestamp()
        });
      }

      setSelectedHousehold({ id: docRef.id, ...newH } as Household);
      setIsHouseholdModalOpen(false);
      setIsFirstFamilyModalOpen(true);
    } catch (error) {
      console.error("Error creating household:", error);
      alert("Failed to create household.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDeleteHousehold = async (householdId: string) => {
    if (!user) return;
    if (user.uid === 'local-guest-user') {
      const updatedHouseholds = households.filter(h => h.id !== householdId);
      setHouseholds(updatedHouseholds);
      localStorage.setItem('toasty_households', JSON.stringify(updatedHouseholds));
      localStorage.removeItem(`toasty_recipes_${householdId}`);
      
      setSelectedHousehold(updatedHouseholds[0] || null);
      setIsDeleteHouseholdConfirmOpen(false);
      setIsHouseholdModalOpen(false);
      return;
    }
    try {
      // 1. Delete all recipes in the household
      const rQuery = query(collection(db, 'recipes'), where('householdId', '==', householdId));
      const rSnapshot = await getDocs(rQuery);
      for (const rDoc of rSnapshot.docs) {
        await deleteDoc(doc(db, 'recipes', rDoc.id));
      }
      // 2. Delete the household
      await deleteDoc(doc(db, 'households', householdId));
      
      setIsDeleteHouseholdConfirmOpen(false);
      setIsHouseholdModalOpen(false);
    } catch (error) {
      console.error("Failed to delete household:", error);
      alert("Failed to delete household. Please try again.");
    }
  };

  const handleSaveRecipe = async (recipeData: Partial<Recipe>) => {
    if (!user || !selectedHousehold) return;
    
    // Validation
    if (!recipeData.title?.trim()) {
      setRecipeFormError("Please enter a recipe title.");
      return;
    }
    if (!recipeData.ingredients || recipeData.ingredients.length === 0) {
      setRecipeFormError("Please add at least one ingredient.");
      return;
    }
    if (!recipeData.instructions || recipeData.instructions.length === 0) {
      setRecipeFormError("Please add at least one instruction step.");
      return;
    }

    setRecipeFormError(null);

    // Remove undefined fields to prevent Firestore errors
    const cleanedData = Object.fromEntries(
      Object.entries(recipeData).filter(([_, v]) => v !== undefined)
    );

    if (user.uid === 'local-guest-user') {
      const key = `toasty_recipes_${selectedHousehold.id}`;
      const stored = localStorage.getItem(key);
      let localR: Recipe[] = stored ? JSON.parse(stored) : [];
      
      if (editingRecipe?.id) {
        localR = localR.map(r => r.id === editingRecipe.id ? {
          ...r,
          ...cleanedData,
          updatedAt: Timestamp.now()
        } as Recipe : r);
      } else {
        const newR: Recipe = {
          ...cleanedData,
          id: `local-recipe-${Date.now()}`,
          authorId: 'local-guest-user',
          householdId: selectedHousehold.id,
          createdAt: Timestamp.now(),
          rating: cleanedData.rating || 0
        } as Recipe;
        localR = [newR, ...localR];
      }
      
      setRecipes(localR);
      localStorage.setItem(key, JSON.stringify(localR));
      
      setIsAddModalOpen(false);
      setEditingRecipe(null);
      return;
    }

    try {
      if (editingRecipe?.id) {
        await updateDoc(doc(db, 'recipes', editingRecipe.id), {
          ...cleanedData,
          updatedAt: serverTimestamp()
        });
      } else {
        await addDoc(collection(db, 'recipes'), {
          ...cleanedData,
          authorId: user.uid,
          householdId: selectedHousehold.id,
          createdAt: serverTimestamp(),
          rating: cleanedData.rating || 0
        });
      }
      setIsAddModalOpen(false);
      setEditingRecipe(null);
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
  };

  const handleDeleteRecipe = async (id: string) => {
    if (user?.uid === 'local-guest-user') {
      if (!selectedHousehold) return;
      const key = `toasty_recipes_${selectedHousehold.id}`;
      const stored = localStorage.getItem(key);
      if (stored) {
        try {
          let localR: Recipe[] = JSON.parse(stored);
          localR = localR.filter(r => r.id !== id);
          setRecipes(localR);
          localStorage.setItem(key, JSON.stringify(localR));
        } catch (e) {
          console.error("Error deleting local recipe:", e);
        }
      }
      setViewingRecipe(null);
      setIsDeleteConfirmOpen(false);
      return;
    }
    try {
      await deleteDoc(doc(db, 'recipes', id));
      setViewingRecipe(null);
      setIsDeleteConfirmOpen(false);
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `recipes/${id}`);
    }
  };

  const handleImportMoreRecipes = async () => {
    if (!user || !selectedHousehold) return;
    setIsProcessing(true);
    
    // Create a set of already existing titles to avoid duplication
    const existingTitles = new Set(recipes.map(r => r.title.toLowerCase()));
    
    if (user.uid === 'local-guest-user') {
      const key = `toasty_recipes_${selectedHousehold.id}`;
      const updatedRecipes = [...recipes];
      
      STOCK_RECIPES.forEach((stock, idx) => {
        if (!existingTitles.has(stock.title.toLowerCase())) {
          updatedRecipes.push({
            ...stock,
            id: `local-recipe-${selectedHousehold.id}-${Date.now()}-${idx}`,
            authorId: 'local-guest-user',
            householdId: selectedHousehold.id,
            createdAt: Timestamp.now()
          } as Recipe);
        }
      });
      
      localStorage.setItem(key, JSON.stringify(updatedRecipes));
      setRecipes(updatedRecipes);
      setIsProcessing(false);
      alert("Imported and synced 50+ beautiful dishes with photos!");
      return;
    }
    
    // For cloud Firestore users
    try {
      let writeCount = 0;
      const promises = [];
      for (const stock of STOCK_RECIPES) {
        if (!existingTitles.has(stock.title.toLowerCase())) {
          promises.push(
            addDoc(collection(db, 'recipes'), {
              ...stock,
              authorId: user.uid,
              householdId: selectedHousehold.id,
              createdAt: serverTimestamp()
            })
          );
          writeCount++;
        }
      }
      
      if (promises.length > 0) {
        await Promise.all(promises);
      }
      alert(`Successfully imported ${writeCount} new master chef recipes to your account!`);
    } catch (error) {
      console.error("Error importing recipes to Firestore:", error);
      alert("Failed to import some cloud recipes. Please check your network connection.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleImport = async () => {
    if (!importUrl) return;
    setIsProcessing(true);
    setImportError(null);
    console.log("Starting import for URL:", importUrl);
    try {
      const extracted = await extractRecipeFromUrl(importUrl);
      console.log("Extracted recipe:", extracted);
      
      const imageUrl = await generateRecipeImage(extracted.title, extracted.category);
      
      // Close import modal first
      setIsImportModalOpen(false);
      
      // Set the editing recipe with temporary fields to satisfy the type
      setEditingRecipe({
        ...extracted,
        id: '', // Temporary ID to indicate it's new but has data
        sourceUrl: importUrl,
        imageUrl: imageUrl || '',
        category: extracted.category as Category || 'Other',
        authorId: user?.uid || '',
        householdId: selectedHousehold?.id || '',
        createdAt: Timestamp.now()
      } as Recipe);
      
      // Open the add modal
      setIsAddModalOpen(true);
      setImportUrl(''); // Clear the URL
    } catch (error) {
      console.error("Import failed:", error);
      setImportError(error instanceof Error ? error.message : "Failed to import recipe. Please check the URL and try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGenerateRecipe = async () => {
    setIsProcessing(true);
    try {
      const recipe = await generateRecipe(aiCategory, aiDetails);
      const imageUrl = await generateRecipeImage(recipe.title, aiCategory);
      
      setIsGenerateModalOpen(false);
      
      setEditingRecipe({
        ...recipe,
        category: aiCategory,
        imageUrl: imageUrl || '',
        id: '',
        authorId: user?.uid || '',
        householdId: selectedHousehold?.id || '',
        createdAt: Timestamp.now()
      } as Recipe);
      
      setIsAddModalOpen(true);
      setAiDetails('');
    } catch (error) {
      console.error("Generate failed:", error);
      alert("Failed to generate recipe. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAddMember = async (userId: string, role: 'admin' | 'member' | 'viewer' = 'member') => {
    if (!selectedHousehold || !user || selectedHousehold.ownerId !== user.uid) return;
    try {
      const hRef = doc(db, 'households', selectedHousehold.id);
      await updateDoc(hRef, {
        [`members.${userId}`]: role
      });
    } catch (error) {
      console.error("Failed to add member:", error);
      alert("Failed to add member. Please check the User ID and try again.");
    }
  };

  const handleRemoveMember = async (userId: string) => {
    if (!selectedHousehold || !user || selectedHousehold.ownerId !== user.uid) return;
    if (userId === user.uid) {
      alert("You cannot remove yourself from your own household.");
      return;
    }
    try {
      const hRef = doc(db, 'households', selectedHousehold.id);
      await updateDoc(hRef, {
        [`members.${userId}`]: deleteField()
      });
    } catch (error) {
      console.error("Failed to remove member:", error);
      alert("Failed to remove member. Please try again.");
    }
  };

  const handleCopyId = () => {
    if (user) {
      navigator.clipboard.writeText(user.uid);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const filteredRecipes = recipes.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         r.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading || (user && householdsLoading)) {
    return (
      <div className="h-screen flex items-center justify-center bg-stone-50">
        <Loader2 className="w-8 h-8 animate-spin text-stone-400" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#f5f5f0] dark:bg-stone-950">
        <Loader2 className="w-8 h-8 animate-spin text-stone-400" />
      </div>
    );
  }

  if (households.length === 0) {
    return (
      <div className="min-h-screen bg-[#f5f5f0] flex flex-col items-center justify-center p-6 font-serif">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center space-y-8"
        >
          <div className="w-20 h-20 bg-stone-800 rounded-3xl flex items-center justify-center mx-auto shadow-xl rotate-3">
            <Users className="w-10 h-10 text-stone-50" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-stone-900 tracking-tight">Create a Household</h1>
            <p className="text-stone-500 text-lg">You need a household to start saving recipes. A household is where you and your family share traditions.</p>
          </div>
          
          <form onSubmit={(e) => {
            e.preventDefault();
            const name = new FormData(e.currentTarget).get('name') as string;
            handleCreateHousehold(name);
          }} className="space-y-4">
            <input 
              name="name" 
              required 
              placeholder="e.g. The Smith Family" 
              className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:ring-2 focus:ring-stone-800/10 outline-none bg-white shadow-sm" 
              disabled={isProcessing} 
            />
            <Button type="submit" className="w-full py-4 text-lg shadow-lg" disabled={isProcessing}>
              {isProcessing ? <><Loader2 className="w-4 h-4 animate-spin" /> Creating...</> : "Create Household"}
            </Button>
          </form>

          <button onClick={logOut} className="text-stone-400 hover:text-stone-600 text-sm font-medium transition-colors">
            Sign out
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#f5f5f0] dark:bg-stone-950 text-stone-800 dark:text-stone-200 font-sans pb-24 transition-colors duration-300">
      <div id="main-content">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#f5f5f0]/80 dark:bg-stone-950/80 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-stone-200/50 dark:border-stone-800/50">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-stone-800 dark:bg-stone-100 rounded-xl flex items-center justify-center shadow-md sm:shadow-lg -rotate-6 flex-shrink-0">
            <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 text-stone-50 dark:text-stone-900" />
          </div>
          <h1 className="text-xl sm:text-2xl font-serif font-bold tracking-tight hidden sm:block">Toasty</h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 font-sans">
          <button 
            type="button"
            onClick={() => setIsDarkMode(prev => !prev)}
            className="p-1.5 sm:p-2 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-full transition-colors text-stone-400 hover:text-stone-600 dark:text-stone-400 flex items-center justify-center flex-shrink-0"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="w-4.5 h-4.5 sm:w-5 sm:h-5" /> : <Moon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />}
          </button>

          <div className="relative flex-shrink-0">
            <button 
              onClick={() => setIsHouseholdModalOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all shadow-sm"
            >
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-400 flex-shrink-0" />
              <span className="font-medium text-xs sm:text-sm text-stone-700 dark:text-stone-200 max-w-[80px] sm:max-w-[150px] truncate block">{selectedHousehold?.name || 'Select Household'}</span>
            </button>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 border-l border-stone-200 dark:border-stone-800 flex-shrink-0">
            {user.isAnonymous ? (
              <button 
                onClick={() => { setAuthError(null); setAuthSuccessMsg(null); setAuthTab('signin'); setIsAuthModalOpen(true); }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-850 text-stone-50 hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 text-xs font-semibold transition-all shadow-sm font-sans"
              >
                Sign In
              </button>
            ) : (
              <>
                {user.photoURL ? (
                  <img src={user.photoURL} referrerPolicy="no-referrer" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-stone-200 dark:border-stone-800" alt="Profile" />
                ) : (
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-xs font-bold text-stone-600 dark:text-stone-300 font-sans">
                    {user.displayName?.[0] || 'U'}
                  </div>
                )}
                <button onClick={logOut} className="p-1.5 sm:p-2 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-full transition-colors" aria-label="Sign out">
                  <LogOut className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-stone-400" />
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-8 space-y-5 sm:space-y-8">
        {/* Welcome & Stats */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6">
          <div className="space-y-0.5 sm:space-y-1">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-stone-50">Welcome, {user.displayName?.split(' ')[0]}</h2>
            <p className="text-sm sm:text-base text-stone-500 dark:text-stone-400 italic">What's cooking today?</p>
          </div>
          <div className="grid grid-cols-3 sm:flex gap-1.5 sm:gap-2 w-full sm:w-auto">
            <Button variant="secondary" onClick={() => setIsGenerateModalOpen(true)} className="px-2 py-2 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-semibold rounded-xl sm:rounded-full whitespace-nowrap dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> AI Recipe
            </Button>
            <Button variant="secondary" onClick={() => setIsImportModalOpen(true)} className="px-2 py-2 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-semibold rounded-xl sm:rounded-full whitespace-nowrap dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700">
              <LinkIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Import URL
            </Button>
            <Button onClick={() => { setEditingRecipe(null); setIsAddModalOpen(true); }} className="px-2 py-2 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-semibold rounded-xl sm:rounded-full whitespace-nowrap dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200">
              <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Add Recipe
            </Button>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="flex flex-col lg:flex-row gap-3 sm:gap-4">
          <div className="relative flex-1 lg:min-w-[400px]">
            <Search className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-stone-400" />
            <input 
              type="text" 
              placeholder="Search recipes or ingredients..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-800/10 dark:focus:ring-stone-100/10 transition-all text-sm sm:text-lg"
            />
          </div>
          <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-1.5 lg:pb-0 scrollbar-hide">
            {['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Drink'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as any)}
                className={cn(
                  "px-4 py-2 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl whitespace-nowrap text-xs sm:text-base font-medium transition-all border shadow-sm",
                  selectedCategory === cat 
                    ? "bg-stone-800 dark:bg-stone-100 text-stone-50 dark:text-stone-900 border-stone-800 dark:border-stone-100 sm:shadow-md font-bold" 
                    : "bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {recipes.length > 0 && recipes.length < 20 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-5 sm:p-6 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 border border-stone-800 dark:border-stone-200 rounded-2xl sm:rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl"
          >
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-serif font-bold text-base sm:text-xl text-stone-100 dark:text-stone-900">Synchronize Global Masterclass Recipes</h4>
              <p className="text-xs sm:text-sm text-stone-400 dark:text-stone-500 max-w-2xl font-sans font-light">
                Expand your homepage with 50+ beautiful culinary delicacies, hand-curated by our chefs with step-by-step instructions and high-resolution visuals.
              </p>
            </div>
            <Button 
              onClick={handleImportMoreRecipes} 
              disabled={isProcessing}
              className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700 text-xs sm:text-sm font-semibold shadow-md whitespace-nowrap flex items-center justify-center gap-2 transition-all shrink-0 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" /> Import 50+ Recipes
            </Button>
          </motion.div>
        )}

        {/* Recipe Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredRecipes.map((recipe) => (
              <motion.div
                key={recipe.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -4 }}
                onClick={() => setViewingRecipe(recipe)}
                className="group cursor-pointer"
              >
                <Card className="h-full flex flex-col gap-2.5 sm:gap-4 overflow-hidden p-0 border-stone-200 dark:border-stone-800">
                  <div className="aspect-[4/3] bg-stone-200 dark:bg-stone-800 relative overflow-hidden">
                    {recipe.imageUrl ? (
                      <img 
                        src={recipe.imageUrl} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        alt={recipe.title} 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-stone-400 dark:text-stone-600">
                        <Utensils className="w-8 h-8 sm:w-12 sm:h-12 opacity-20" />
                      </div>
                    )}
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm text-[9px] sm:text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-100 shadow-sm">
                      {recipe.category}
                    </div>
                  </div>
                  <div className="p-3 sm:p-6 pt-1.5 sm:pt-2 space-y-1.5 sm:space-y-3">
                    <div className="flex justify-between items-start gap-1">
                      <h3 className="text-sm sm:text-xl font-serif font-bold text-stone-900 dark:text-stone-50 line-clamp-2 sm:line-clamp-1 flex-1">{recipe.title}</h3>
                      <div className="flex items-center gap-0.5 sm:gap-1 text-amber-500 shrink-0">
                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                        <span className="text-xs sm:text-sm font-bold">{recipe.rating || 0}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-stone-400 dark:text-stone-500 text-[10px] sm:text-xs">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>{recipe.estimatedTime ? `${recipe.estimatedTime}m` : `${recipe.instructions.length * 5}m`}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Soup className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>{recipe.ingredients.length} {recipe.ingredients.length === 1 ? 'ingredient' : 'ingredients'}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </section>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12 sm:py-20 space-y-3 sm:space-y-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-stone-100 dark:bg-stone-900 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-6 h-6 sm:w-8 sm:h-8 text-stone-300 dark:text-stone-700" />
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-medium text-stone-500">No recipes found</h3>
            <p className="text-xs sm:text-sm text-stone-400">Try adjusting your search or filters.</p>
          </div>
        )}
      </main>
      </div>

      {/* Modals */}
      
      {/* View Recipe Modal */}
      <Modal 
        isOpen={!!viewingRecipe} 
        onClose={() => { setViewingRecipe(null); setIsDeleteConfirmOpen(false); }} 
        title={viewingRecipe?.title}
      >
        <div className="space-y-4 sm:space-y-8">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-stone-500 dark:text-stone-400 text-xs sm:text-sm">
            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-[10px] sm:text-xs font-bold uppercase">{viewingRecipe?.category}</span>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              <span className="font-bold">{viewingRecipe?.rating}</span>
            </div>
            {viewingRecipe?.sourceUrl && (
              <a href={viewingRecipe.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-stone-400 hover:text-stone-800 dark:hover:text-stone-100 transition-colors">
                <LinkIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Source
              </a>
            )}
          </div>

          {viewingRecipe?.imageUrl && (
            <div className="aspect-video w-full overflow-hidden rounded-xl sm:rounded-2xl bg-stone-100 dark:bg-stone-800 shadow-inner">
              <img 
                src={viewingRecipe.imageUrl} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover" 
                alt={viewingRecipe.title} 
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <div className="md:col-span-1 space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-serif font-bold border-b border-stone-200 dark:border-stone-800 pb-1.5 sm:pb-2 text-stone-900 dark:text-stone-50">Ingredients</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-base">
                {viewingRecipe?.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-600 dark:text-stone-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-700 mt-2 flex-shrink-0" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-serif font-bold border-b border-stone-200 dark:border-stone-800 pb-1.5 sm:pb-2 text-stone-900 dark:text-stone-50">Instructions</h4>
              <ol className="space-y-4 sm:space-y-6 text-xs sm:text-base">
                {viewingRecipe?.instructions.map((step, i) => (
                  <li key={i} className="flex gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center font-bold text-stone-400 dark:text-stone-500 text-xs sm:text-sm">{i + 1}</span>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed pt-0.5 sm:pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="pt-4 sm:pt-8 border-t border-stone-200 dark:border-stone-800 flex justify-between gap-2">
            {isDeleteConfirmOpen ? (
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-xs sm:text-sm font-medium text-red-600">Are you sure?</span>
                <Button variant="danger" onClick={() => viewingRecipe && handleDeleteRecipe(viewingRecipe.id!)} className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm">
                  Yes, Delete
                </Button>
                <Button variant="ghost" onClick={() => setIsDeleteConfirmOpen(false)} className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm">
                  Cancel
                </Button>
              </div>
            ) : (
              <Button variant="danger" onClick={() => setIsDeleteConfirmOpen(true)} className="px-3 py-1.5 text-xs sm:px-4 sm:py-2">
                <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Delete
              </Button>
            )}
            <Button onClick={() => { setEditingRecipe(viewingRecipe); setViewingRecipe(null); setIsAddModalOpen(true); }} className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200">
              <Edit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Edit Recipe
            </Button>
          </div>
        </div>
      </Modal>

      {/* Add/Edit Recipe Modal */}
      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => { setIsAddModalOpen(false); setEditingRecipe(null); setRecipeFormError(null); }} 
        title={editingRecipe?.id ? "Edit Recipe" : "Add New Recipe"}
      >
        <form 
          key={editingRecipe ? (editingRecipe.id || 'imported-' + editingRecipe.title) : 'new'}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            handleSaveRecipe({
              title: formData.get('title') as string,
              category: formData.get('category') as Category,
              rating: Number(formData.get('rating')),
              estimatedTime: formData.get('estimatedTime') ? Number(formData.get('estimatedTime')) : null,
              ingredients: (formData.get('ingredients') as string).split('\n').filter(i => i.trim()),
              instructions: (formData.get('instructions') as string).split('\n').filter(i => i.trim()),
              imageUrl: formData.get('imageUrl') as string,
              sourceUrl: formData.get('sourceUrl') as string,
            });
          }} 
          className="space-y-6"
        >
          {recipeFormError && (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>{recipeFormError}</p>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-sm font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">Title</label>
              <input name="title" required defaultValue={editingRecipe?.title} className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-stone-800/10 dark:focus:ring-stone-100/10 outline-none" />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-sm font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">Category</label>
              <select name="category" defaultValue={editingRecipe?.category || 'Dinner'} className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-stone-800/10 dark:focus:ring-stone-100/10 outline-none">
                {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Drink', 'Other'].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-sm font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">Rating (1-5)</label>
              <input name="rating" type="number" min="1" max="5" defaultValue={editingRecipe?.rating || 5} className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-stone-800/10 dark:focus:ring-stone-100/10 outline-none" />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-sm font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">Time (minutes)</label>
              <input name="estimatedTime" type="number" min="1" defaultValue={editingRecipe?.estimatedTime} className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-stone-800/10 dark:focus:ring-stone-100/10 outline-none" placeholder="e.g. 30" />
            </div>
          </div>

          <div className="space-y-1 sm:space-y-2">
            <label className="text-xs sm:text-sm font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">Ingredients (One per line)</label>
            <textarea name="ingredients" required rows={3} defaultValue={editingRecipe?.ingredients.join('\n')} className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-stone-800/10 dark:focus:ring-stone-100/10 outline-none" placeholder="e.g., 2 slices sourdough&#10;1 ripe avocado" />
          </div>

          <div className="space-y-1 sm:space-y-2">
            <label className="text-xs sm:text-sm font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">Instructions (One step per line)</label>
            <textarea name="instructions" required rows={3} defaultValue={editingRecipe?.instructions.join('\n')} className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-stone-800/10 dark:focus:ring-stone-100/10 outline-none" placeholder="e.g., Toast sourdough bread.&#10;Mash avocado and spread." />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-sm font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">Image URL (Optional)</label>
              <input name="imageUrl" defaultValue={editingRecipe?.imageUrl} className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-stone-800/10 dark:focus:ring-stone-100/10 outline-none" />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <label className="text-xs sm:text-sm font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">Source URL (Optional)</label>
              <input name="sourceUrl" defaultValue={editingRecipe?.sourceUrl} className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-stone-800/10 dark:focus:ring-stone-100/10 outline-none" />
            </div>
          </div>

          <Button type="submit" className="w-full py-3.5 sm:py-4 text-base sm:text-lg rounded-xl sm:rounded-full mt-2">Save Recipe</Button>
        </form>
      </Modal>

      {/* Import Modal */}
      <Modal isOpen={isImportModalOpen} onClose={() => { setIsImportModalOpen(false); setImportError(null); }} title="Import from Web">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">Recipe URL</label>
            <input 
              type="url" 
              placeholder="https://example.com/best-cookies" 
              value={importUrl}
              onChange={(e) => { setImportUrl(e.target.value); setImportError(null); }}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-stone-800/10 dark:focus:ring-stone-100/10 outline-none" 
            />
          </div>
          {importError && (
            <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3 text-red-600 text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p>{importError}</p>
            </div>
          )}
          <Button className="w-full py-4" onClick={handleImport} disabled={isProcessing || !importUrl}>
            {isProcessing ? <><Loader2 className="w-4 h-4 animate-spin" /> Extracting...</> : "Import Recipe"}
          </Button>
          <p className="text-sm text-stone-400 text-center italic">Gemini will intelligently gather only the essential recipe details and ingredients for you.</p>
        </div>
      </Modal>

      {/* Generate AI Recipe Modal */}
      <Modal isOpen={isGenerateModalOpen} onClose={() => setIsGenerateModalOpen(false)} title="Generate AI Recipe">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">Meal Type</label>
            <select 
              value={aiCategory} 
              onChange={(e) => setAiCategory(e.target.value as Category)}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-stone-800/10 dark:focus:ring-stone-100/10 outline-none"
            >
              {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Drink', 'Other'].map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">Preferences (Optional)</label>
            <textarea 
              placeholder="e.g., Needs to be vegan, use sweet potatoes, spicy..."
              value={aiDetails}
              onChange={(e) => setAiDetails(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:ring-2 focus:ring-stone-800/10 dark:focus:ring-stone-100/10 outline-none"
            />
          </div>
          <Button className="w-full py-4" onClick={handleGenerateRecipe} disabled={isProcessing}>
            {isProcessing ? <><Loader2 className="w-4 h-4 animate-spin" /> Generating...</> : "Generate Recipe & Image"}
          </Button>
          <p className="text-sm text-stone-400 text-center italic">Gemini will create a unique recipe and generate a photo to match.</p>
        </div>
      </Modal>

      {/* Household Modal */}
      <Modal isOpen={isHouseholdModalOpen} onClose={() => setIsHouseholdModalOpen(false)} title="My Households">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest">Switch Household</h3>
            <div className="grid grid-cols-1 gap-2">
              {households.map(h => (
                <button
                  key={h.id}
                  onClick={() => { setSelectedHousehold(h); setIsHouseholdModalOpen(false); }}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-2xl border transition-all",
                    selectedHousehold?.id === h.id 
                      ? "bg-stone-800 dark:bg-stone-100 border-stone-800 dark:border-stone-100 text-stone-50 dark:text-stone-900" 
                      : "bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-500 text-stone-900 dark:text-stone-100"
                  )}
                >
                  <span className="font-medium">{h.name}</span>
                  {selectedHousehold?.id === h.id && <ChevronRight className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </div>

          {selectedHousehold && selectedHousehold.ownerId === user.uid && (
            <div className="space-y-4 pt-8 border-t border-stone-200">
              <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest">Invite Member</h3>
              <p className="text-xs text-stone-400 italic">Enter the User ID of the person you want to invite.</p>
              <form onSubmit={(e) => {
                e.preventDefault();
                const uid = new FormData(e.currentTarget).get('uid') as string;
                handleAddMember(uid);
                e.currentTarget.reset();
              }} className="flex gap-2">
                <input name="uid" required placeholder="User UID" className="flex-1 px-4 py-2 rounded-xl border border-stone-200 outline-none" />
                <Button type="submit">Invite</Button>
              </form>
              <div className="space-y-2">
                {Object.entries(selectedHousehold.members).map(([uid, role]) => (
                  <div key={uid} className="flex justify-between items-center text-sm p-2 bg-white rounded-lg border border-stone-100">
                    <span className="font-mono text-xs text-stone-400">{uid.slice(0, 8)}...</span>
                    <div className="flex items-center gap-2">
                      <span className="capitalize px-2 py-0.5 rounded-full bg-stone-100 text-stone-500 text-[10px] font-bold">{role}</span>
                      {uid !== user.uid && (
                        <button 
                          onClick={() => handleRemoveMember(uid)}
                          className="text-stone-400 hover:text-red-500 transition-colors"
                          title="Remove member"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4 pt-8 border-t border-stone-200 dark:border-stone-800">
            <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest">My User ID</h3>
            <div className="flex items-center justify-between p-3 bg-stone-100 dark:bg-stone-800 rounded-xl">
              <code className="text-xs font-mono text-stone-600 dark:text-stone-300">{user.uid}</code>
              <button 
                onClick={handleCopyId}
                className="text-[10px] font-bold uppercase text-stone-400 hover:text-stone-800 dark:hover:text-stone-100 transition-colors"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t border-stone-200 dark:border-stone-800">
            <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest">Create New Household</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const name = new FormData(e.currentTarget).get('name') as string;
              handleCreateHousehold(name);
            }} className="flex gap-2">
              <input name="name" required placeholder="e.g. The Smith Family" className="flex-1 px-4 py-2 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 outline-none" disabled={isProcessing} />
              <Button type="submit" disabled={isProcessing}>
                {isProcessing ? <><Loader2 className="w-4 h-4 animate-spin" /> Creating...</> : "Create"}
              </Button>
            </form>
          </div>

          {selectedHousehold && selectedHousehold.ownerId === user.uid && (
            <div className="pt-8 border-t border-stone-200 flex justify-end">
              {isDeleteHouseholdConfirmOpen ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-red-600">Are you sure?</span>
                  <Button variant="danger" onClick={() => handleDeleteHousehold(selectedHousehold.id)}>
                    Yes, Delete Household
                  </Button>
                  <Button variant="secondary" onClick={() => setIsDeleteHouseholdConfirmOpen(false)}>
                    Cancel
                  </Button>
                </div>
              ) : (
                <Button variant="danger" onClick={() => setIsDeleteHouseholdConfirmOpen(true)}>
                  <Trash2 className="w-4 h-4" /> Delete Household
                </Button>
              )}
            </div>
          )}
        </div>
      </Modal>

      {/* Demo Disabled Modal */}
      <Modal isOpen={isDemoDisabledModalOpen} onClose={() => setIsDemoDisabledModalOpen(false)} title="Feature Disabled">
        <div className="space-y-6 text-center">
          <div className="w-16 h-16 bg-stone-100 dark:bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-stone-400" />
          </div>
          <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
            Sharing households with other users has been disabled for this demo to protect user privacy.
          </p>
          <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
            If you'd like to use this feature, click the <strong>Remix</strong> button in AI Studio to create your own private version of this app!
          </p>
          <Button className="w-full py-4 mt-4" onClick={() => setIsDemoDisabledModalOpen(false)}>
            Got it
          </Button>
        </div>
      </Modal>

      {/* Data Deleted Modal */}
      <Modal isOpen={isDataDeletedModalOpen} onClose={() => setIsDataDeletedModalOpen(false)} title="Data Cleanup">
        <div className="space-y-6 text-center">
          <div className="w-16 h-16 bg-stone-100 dark:bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trash2 className="w-8 h-8 text-stone-400" />
          </div>
          <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
            Welcome back! Just a heads up: to keep this demo clean, all user data is automatically deleted after 24 hours.
          </p>
          <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
            If you want your recipes to persist forever, click the <strong>Remix</strong> button in AI Studio to create your own private version of this app!
          </p>
          <Button className="w-full py-4 mt-4" onClick={() => setIsDataDeletedModalOpen(false)}>
            I understand
          </Button>
        </div>
      </Modal>

      {/* First Family Created Modal */}
      <Modal isOpen={isFirstFamilyModalOpen} onClose={() => setIsFirstFamilyModalOpen(false)} title="Welcome to Toasty!">
        <div className="space-y-6 text-center">
          <div className="w-16 h-16 bg-stone-100 dark:bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-stone-400" />
          </div>
          <div className="space-y-4">
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
              Your family kitchen has been created! 
            </p>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/30 border border-amber-100 dark:border-amber-900/50 rounded-2xl text-amber-800 dark:text-amber-200 text-sm">
              <p className="font-bold mb-1">Important Demo Info:</p>
              <p>To keep this demo fast and clean, all data is automatically deleted after 24 hours.</p>
            </div>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
              If you want to create your own permanent version and keep your family recipes forever, click the <strong>Remix</strong> button in the top right of AI Studio!
            </p>
          </div>
          <Button className="w-full py-4 mt-4" onClick={() => setIsFirstFamilyModalOpen(false)}>
            Start Cooking
          </Button>
        </div>
      </Modal>

      {/* Custom Auth Modal */}
      <Modal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} title="Sign In & Sign Up">
        <div className="space-y-6">
          <div className="flex bg-stone-100 dark:bg-stone-800 p-1 rounded-xl">
            <button 
              onClick={() => { setAuthTab('signin'); setAuthError(null); setAuthSuccessMsg(null); }}
              className={cn(
                "flex-1 py-2 text-sm font-semibold rounded-lg transition-all",
                authTab === 'signin' 
                  ? "bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 shadow-sm" 
                  : "text-stone-500 hover:text-stone-800 dark:hover:text-stone-300"
              )}
            >
              Sign In
            </button>
            <button 
              onClick={() => { setAuthTab('signup'); setAuthError(null); setAuthSuccessMsg(null); }}
              className={cn(
                "flex-1 py-2 text-sm font-semibold rounded-lg transition-all",
                authTab === 'signup' 
                  ? "bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 shadow-sm" 
                  : "text-stone-500 hover:text-stone-800 dark:hover:text-stone-300"
              )}
            >
              Create Account
            </button>
          </div>

          {authError && (
            <div className="p-3.5 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-xl text-red-600 dark:text-red-400 text-xs sm:text-sm font-medium leading-relaxed">
              {authError}
            </div>
          )}

          {authSuccessMsg && (
            <div className="p-3.5 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 rounded-xl text-green-600 dark:text-green-400 text-xs sm:text-sm font-medium">
              {authSuccessMsg}
            </div>
          )}

          <div className="space-y-4">
            <Button 
              onClick={handleGoogleSignInInModal}
              disabled={isAuthSubmitLoading}
              variant="outline"
              className="w-full py-3 text-sm font-semibold hover:bg-stone-100 dark:hover:bg-stone-800 border-stone-200 dark:border-stone-700 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.67-.35-1.37-.35-2.09z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              Continue with Google
            </Button>

            <div className="flex items-center gap-3">
              <hr className="flex-1 border-stone-200 dark:border-stone-800" />
              <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">or use email</span>
              <hr className="flex-1 border-stone-200 dark:border-stone-800" />
            </div>

            {authTab === 'signin' ? (
              <form onSubmit={handleEmailSignIn} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="you@example.com"
                    value={authEmail}
                    onChange={(e) => setAuthEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 placeholder-stone-400 outline-none focus:ring-2 focus:ring-stone-600/10 transition-all text-sm"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Password</label>
                  <input 
                    type="password" 
                    required
                    placeholder="Enter your password"
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 placeholder-stone-400 outline-none focus:ring-2 focus:ring-stone-600/10 transition-all text-sm"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isAuthSubmitLoading}
                  className="w-full py-4 text-sm font-semibold rounded-xl bg-stone-800 dark:bg-stone-100 text-stone-50 dark:text-stone-900"
                >
                  {isAuthSubmitLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In with Email"}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleEmailSignUp} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Your Chef Name"
                    value={authName}
                    onChange={(e) => setAuthName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 placeholder-stone-400 outline-none focus:ring-2 focus:ring-stone-600/10 transition-all text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="you@example.com"
                    value={authEmail}
                    onChange={(e) => setAuthEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 placeholder-stone-400 outline-none focus:ring-2 focus:ring-stone-600/10 transition-all text-sm"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Password</label>
                  <input 
                    type="password" 
                    required
                    placeholder="At least 6 characters"
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 placeholder-stone-400 outline-none focus:ring-2 focus:ring-stone-600/10 transition-all text-sm"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isAuthSubmitLoading}
                  className="w-full py-4 text-sm font-semibold rounded-xl bg-stone-800 dark:bg-stone-100 text-stone-50 dark:text-stone-900"
                >
                  {isAuthSubmitLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Create Account"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Modal>
    </div>
    </ErrorBoundary>
  );
}
