import { reactive, readonly } from 'vue'

const state = reactive({
  locale: 'en'
})

const translations = {
  en: {
    exploreBadge: 'Explore the Heart of Africa',
    discover: 'Discover',
    rwanda: 'Rwanda',
    description: 'Experience breathtaking hills, vibrant culture, wildlife adventures, and unforgettable destinations across Rwanda.',
    exploreNow: 'Explore Now',
    learnMore: 'Learn More',

    home: 'Home',
    about: 'About Us',
    services: 'Services',
    gallery: 'Gallery',
    destination: 'Destination',
    login: 'Login',
    register: 'Register',
    contact: 'Contact'
  },

  rw: {
    exploreBadge: 'Sura umutima w\' Afurika',
    discover: 'Gusura',
    rwanda: 'U Rwanda',
    description: 'Gira uburambe mu misozi itatse, umuco, n\'ubwiza bw\'u Rwanda.',

    home: 'Ahabanza',
    about: 'Ibyerekeye',
    services: 'Serivisi',
    gallery: 'Gallery',
    destination: 'Aho ujya',
    login: 'Kwinjira',
    register: 'Kwiyandikisha',
    contact: 'Twandikire'
  },

  fr: {
    exploreBadge: 'Explorez le coeur de l\'Afrique',
    discover: 'Découvrir',
    rwanda: 'Rwanda',
    description: 'Découvrez les paysages magnifiques du Rwanda.',

    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    gallery: 'Galerie',
    destination: 'Destination',
    login: 'Connexion',
    register: "S'inscrire",
    contact: 'Contact'
  }
}

export function useI18n() {
  function t(key) {
    const locale = state.locale || 'en'

    return (
      translations?.[locale]?.[key] ||
      translations?.en?.[key] ||
      key
    )
  }

  function setLocale(loc) {
    if (translations[loc]) {
      state.locale = loc
    }
  }

  return {
    locale: readonly(state),
    t,
    setLocale
  }
}

export default useI18n