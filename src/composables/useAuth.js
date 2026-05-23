import { ref, onMounted } from "vue";
import { auth, provider } from "../firebase.js";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

export const user = ref(null);

// Flag para garantir que o observer seja registrado apenas uma vez
let authObserverRegistered = false;

// Estado de loading para evitar múltiplos cliques
const loading = ref(false);

export function useAuth() {
  const login = async () => {
    // Evita múltiplas chamadas simultâneas
    if (loading.value) return;
    loading.value = true;

    try {
      const result = await signInWithPopup(auth, provider);
      user.value = result.user;
    } catch (error) {
      // Ignora erro de popup cancelado (usuário fechou a janela ou clicou duas vezes)
      if (error.code !== "auth/cancelled-popup-request") {
        console.error("Erro no login:", error);
        alert("Falha ao fazer login. Veja o console para detalhes.");
      }
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      user.value = null;
    } catch (error) {
      console.error("Erro no logout:", error);
    }
  };

  // Registra o observer uma única vez (global)
  if (!authObserverRegistered) {
    authObserverRegistered = true;
    onMounted(() => {
      onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser;
      });
    });
  }

  return { user, login, logout, loading };
}