import { reactive, readonly } from 'vue'

const state = reactive({
  locale: 'en'
})

const translations = {
  en: {
    exploreBadge: 'Explore the Heart of Africa',
    discover: 'Discover',
    rwanda: 'Rwanda',
    description: 'Experience breathtaking hills, vibrant culture, wildlife adventures, and unforgettable destinations across the beautiful land of Rwanda.',
    exploreNow: 'Explore Now',
    learnMore: 'Learn More',
    stats1val: '1000+',
    stats1label: 'Beautiful Hills',
    stats2val: '4',
    stats2label: 'National Parks',
    stats3val: 'Endless',
    stats3label: 'Travel Experiences',
    contact: 'Contact',
    home: 'Home',
    about: 'About Us',
    services: 'Services'
  },
  rw: {
    exploreBadge: 'Sura umutima w\' Afurika',
    discover: 'Gusura',
    rwanda: 'U Rwanda',
    description: 'Gira uburambe mu misozi itatse umutima wa afurika, umuco wihariye, ingendo z\'inyamaswa, n\'ahantu h\'ubwiza mu gihugu cy\'u Rwanda.',
    exploreNow: 'Tangira Ubu',
    learnMore: 'Menya byinshi',
    stats1val: '1000+',
    stats1label: 'Imisozi Myiza',
    stats2val: '4',
    stats2label: 'Pariki z\'Igihugu',
    stats3val: 'Ibidahagarara',
    stats3label: 'Inyunganizi z\'Ingendo',
    contact: 'Twandikire',
    home: 'Ahabanza',
    about: 'Ibyerekeye',
    services: 'Serivisi'
  },
  fr: {
    exploreBadge: 'Explorez le coeur de l\'Afrique',
    discover: 'Découvrir',
    rwanda: 'Rwanda',
    description: 'Vivez des collines à couper le souffle, une culture vibrante, des aventures fauniques et des destinations inoubliables à travers le magnifique pays du Rwanda.',
    exploreNow: 'Explorer maintenant',
    learnMore: 'En savoir plus',
    stats1val: '1000+',
    stats1label: 'Belles collines',
    stats2val: '4',
    stats2label: 'Parcs nationaux',
    stats3val: 'Sans fin',
    stats3label: 'Expériences de voyage',
    contact: 'Contact',
    home: 'Accueil',
    about: 'À propos',
    services: 'Services'
  }
}

export function useI18n (){
  function t(key){
    const locale = state.locale || 'en'
    return translations[locale][key] || translations['en'][key] || key
  }

  function setLocale(loc){
    if (translations[loc]) state.locale = loc
  }

  return {
    locale: readonly(state),
    t,
    setLocale
  }
}

export default useI18n
