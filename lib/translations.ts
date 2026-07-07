import { useState, useEffect } from 'react';

export type Language = 'es' | 'en' | 'gl';

export interface Translations {
  // Navigation
  nav: {
    inicio: string;
    programa: string;
    etica: string;
    becas: string;
    convocatoria2025: string;
    basesGenerales: string;
    mentores: string;
    blog: string;
  };
  
  // Hero section
  hero: {
    title: string;
    description: string;
  };
  
  // Areas section
  areas: {
    title: string;
    cultura: {
      title: string;
      description: string;
    };
    arte: {
      title: string;
      description: string;
    };
    salud: {
      title: string;
      description: string;
    };
    robotica: {
      title: string;
      description: string;
    };
    sostenibilidad: {
      title: string;
      description: string;
    };
    etica: {
      title: string;
      description: string;
    };
  };
  
  // Scholarship section
  scholarship: {
    title: string;
    description: string;
    githubText: string;
    githubButton: string;
  };
  
  // YouTube section
  youtube: {
    title: string;
    description: string;
    button: string;
  };
  
  // Newsletter section
  newsletter: {
    title: string;
    description: string;
    button: string;
  };

  // Read Newsletter section
  readNewsletter: {
    title: string;
    description: string;
    button: string;
  };

  // Discord section
  discord: {
    title: string;
    description: string;
    button: string;
  };
  
  // Ethics section
  ethics: {
    title: string;
    description: string;
    commitments: string[];
    conclusion: string;
  };
  
  // Footer
  footer: {
    quickLinks: string;
    contact: string;
    copyright: string;
    legalNotice: string;
    privacyPolicy: string;
  };

  // Blog
  blog: {
    title: string;
    latestPost: string;
    readMore: string;
    allPosts: string;
  };

  // Announcement
  announcement: {
    title: string;
    subtitle: string;
    dateLabel: string;
    dateRange: string;
    description: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      inicio: 'Inicio',
      programa: 'Programa',
      etica: 'Ética',
      becas: 'Becas',
      convocatoria2025: 'Convocatoria 2026',
      basesGenerales: 'Bases Generales',
      mentores: 'Mentores',
      blog: 'Blog'
    },
    hero: {
      title: 'Impulsando el Progreso con Inteligencia Artificial',
      description: 'ANFAIA lidera proyectos innovadores en cultura, arte, salud, robótica y sostenibilidad ambiental. Utilizando la IA para crear un futuro mejor y ético.'
    },
    areas: {
      title: 'Nuestras Áreas de Acción',
      cultura: {
        title: 'Cultura',
        description: 'Creemos que la inteligencia artificial tiene el potencial de revolucionar la forma en que creamos, compartimos y experimentamos la cultura'
      },
      arte: {
        title: 'Arte',
        description: 'La intersección entre el arte y la inteligencia artificial ofrece un vasto campo de exploración creativa'
      },
      salud: {
        title: 'Salud',
        description: 'La aplicación de la IA en el campo de la salud tiene el potencial de salvar vidas y mejorar la calidad de vida de millones de personas'
      },
      robotica: {
        title: 'Robótica/Automatización',
        description: 'La combinación de IA con automatizacion y robótica abre un mundo de posibilidades para automatizar tareas y crear sistemas inteligentes'
      },
      sostenibilidad: {
        title: 'Sostenibilidad',
        description: 'La IA juega un papel crucial en la lucha contra el cambio climático y la promoción de un futuro sostenible'
      },
      etica: {
        title: 'Ética',
        description: 'Reconocemos la importancia de abordar las implicaciones éticas del desarrollo y uso de la IA'
      }
    },
    scholarship: {
      title: 'Proyectos open source de la edición 2025',
      description: 'Descubre los proyectos desarrollados en la edición anterior de las Becas de Verano ANFAIA y explora el trabajo realizado por los participantes en nuestro ecosistema open source.',
      githubText: '',
      githubButton: 'Ver Proyectos en GitHub'
    },
    youtube: {
      title: 'Conferencias de Verano',
      description: 'Visita nuestro canal de YouTube para explorar las conferencias de verano y contenido educativo sobre IA:',
      button: 'Ver Canal de YouTube'
    },
    newsletter: {
      title: 'Mantente Informado',
      description: '¿Quieres recibir información sobre nuestras actividades? Déjanos tus datos para mantenerte al tanto de lo que sucede:',
      button: 'Únete a nuestra lista'
    },
    readNewsletter: {
      title: 'Newsletter de Noticias sobre IA',
      description: 'Mantente al día con la actualidad de la inteligencia artificial. Lee nuestra newsletter de noticias sobre IA, sin necesidad de suscribirte:',
      button: 'Leer newsletter'
    },
    discord: {
      title: 'Únete a la Comunidad',
      description: 'Conecta con otros miembros de ANFAIA, participa en debates sobre IA y mantente al día en nuestro servidor de Discord:',
      button: 'Unirse a Discord'
    },
    ethics: {
      title: 'Nuestro Compromiso Ético',
      description: 'En ANFAIA, creemos firmemente que el desarrollo y la implementación de la Inteligencia Artificial deben estar guiados por sólidos principios éticos. Nos comprometemos a:',
      commitments: [
        'Promover la transparencia en los algoritmos de IA',
        'Generar y trabajar con fuentes de datos abiertas',
        'Fomentar la equidad y evitar sesgos discriminatorios',
        'Considerar el impacto social y ambiental de nuestras tecnologías',
        'Educar sobre el uso responsable de la IA'
      ],
      conclusion: 'Trabajamos en estrecha colaboración con expertos en ética, legisladores y la comunidad para asegurar que nuestros proyectos de IA beneficien a la sociedad en su conjunto.'
    },
    footer: {
      quickLinks: 'Enlaces Rápidos',
      contact: 'Contacto',
      copyright: '© 2025 ANFAIA - Todos los derechos reservados.',
      legalNotice: 'Aviso Legal',
      privacyPolicy: 'Política de Privacidad'
    },
    blog: {
      title: 'Blog',
      latestPost: 'Última Entrada del Blog',
      readMore: 'Leer más',
      allPosts: 'Ver todas las entradas'
    },
    announcement: {
      title: 'Becas de Verano ANFAIA 2026',
      subtitle: '',
      dateLabel: 'Plazo de inscripción cerrado',
      dateRange: '',
      description: 'Durante el verano los participantes desarrollarán proyectos de inteligencia artificial en diferentes ámbitos, publicando los resultados como software de código abierto.'
    }
  },
  
  en: {
    nav: {
      inicio: 'Home',
      programa: 'Program',
      etica: 'Ethics',
      becas: 'Scholarships',
      convocatoria2025: '2026 Call',
      basesGenerales: 'General Guidelines',
      mentores: 'Mentors',
      blog: 'Blog'
    },
    hero: {
      title: 'Driving Progress with Artificial Intelligence',
      description: 'ANFAIA leads innovative projects in culture, art, health, robotics, and environmental sustainability. Using AI to create a better and ethical future.'
    },
    areas: {
      title: 'Focus Areas',
      cultura: {
        title: 'Culture',
        description: 'We believe that artificial intelligence has the potential to revolutionize the way we create, share, and experience culture'
      },
      arte: {
        title: 'Art',
        description: 'The intersection between art and artificial intelligence offers a vast field of creative exploration'
      },
      salud: {
        title: 'Health',
        description: 'The application of AI in the healthcare field has the potential to save lives and improve the quality of life for millions of people'
      },
      robotica: {
        title: 'Robotics/Automation',
        description: 'The combination of AI with automation and robotics opens up a world of possibilities for automating tasks and creating intelligent systems'
      },
      sostenibilidad: {
        title: 'Sustainability',
        description: 'AI plays a crucial role in the fight against climate change and the promotion of a sustainable future'
      },
      etica: {
        title: 'Ethics',
        description: 'We recognize the importance of addressing the ethical implications of AI development and use'
      }
    },
    scholarship: {
      title: 'Open Source Projects from the 2025 Edition',
      description: 'Discover the projects developed in the previous edition of ANFAIA Summer Scholarships and explore the work done by participants in our open source ecosystem.',
      githubText: '',
      githubButton: 'View GitHub Projects'
    },
    youtube: {
      title: 'Summer Conferences',
      description: 'Visit our YouTube channel to explore summer conferences and educational content about AI:',
      button: 'View YouTube Channel'
    },
    newsletter: {
      title: 'Stay Informed',
      description: 'Want to receive information about our activities? Leave us your details to stay up to date with what\'s happening:',
      button: 'Join our list'
    },
    readNewsletter: {
      title: 'AI News Newsletter',
      description: 'Stay up to date with the latest in artificial intelligence. Read our AI news newsletter, no subscription needed:',
      button: 'Read newsletter'
    },
    discord: {
      title: 'Join the Community',
      description: 'Connect with other ANFAIA members, take part in AI discussions, and stay up to date on our Discord server:',
      button: 'Join Discord'
    },
    ethics: {
      title: 'Our Ethical Commitment',
      description: 'At ANFAIA, we firmly believe that the development and implementation of Artificial Intelligence must be guided by solid ethical principles. We commit to:',
      commitments: [
        'Promote transparency in AI algorithms',
        'Generate and work with open data sources',
        'Foster equity and avoid discriminatory biases',
        'Consider the social and environmental impact of our technologies',
        'Educate about responsible AI use'
      ],
      conclusion: 'We work closely with ethics experts, legislators, and the community to ensure that our AI projects benefit society as a whole.'
    },
    footer: {
      quickLinks: 'Quick Links',
      contact: 'Contact',
      copyright: '© 2025 ANFAIA - All rights reserved.',
      legalNotice: 'Legal Notice',
      privacyPolicy: 'Privacy Policy'
    },
    blog: {
      title: 'Blog',
      latestPost: 'Latest Blog Post',
      readMore: 'Read more',
      allPosts: 'View all posts'
    },
    announcement: {
      title: 'ANFAIA Summer Scholarships 2026',
      subtitle: '',
      dateLabel: 'Registration period closed',
      dateRange: '',
      description: 'During the summer, participants will develop artificial intelligence projects in different fields, publishing the results as open source software.'
    }
  },
  
  gl: {
    nav: {
      inicio: 'Inicio',
      programa: 'Programa',
      etica: 'Ética',
      becas: 'Bolsas',
      convocatoria2025: 'Convocatoria 2026',
      basesGenerales: 'Bases Xerais',
      mentores: 'Mentores',
      blog: 'Blog'
    },
    hero: {
      title: 'Impulsando o Progreso coa Intelixencia Artificial',
      description: 'ANFAIA lidera proxectos innovadores en cultura, arte, saúde, robótica e sustentabilidade ambiental. Usando a IA para crear un futuro mellor e ético.'
    },
    areas: {
      title: 'As nosas Áreas de Acción',
      cultura: {
        title: 'Cultura',
        description: 'Cremos que a intelixencia artificial ten o potencial de revolucionar a forma en que creamos, compartimos e experimentamos a cultura'
      },
      arte: {
        title: 'Arte',
        description: 'A intersección entre a arte e a intelixencia artificial ofrece un vasto campo de exploración creativa'
      },
      salud: {
        title: 'Saúde',
        description: 'A aplicación da IA no campo da saúde ten o potencial de salvar vidas e mellorar a calidade de vida de millóns de persoas'
      },
      robotica: {
        title: 'Robótica/Automatización',
        description: 'A combinación de IA coa automatización e robótica abre un mundo de posibilidades para automatizar tarefas e crear sistemas intelixentes'
      },
      sostenibilidad: {
        title: 'Sustentabilidade',
        description: 'A IA xoga un papel crucial na loita contra o cambio climático e a promoción dun futuro sustentable'
      },
      etica: {
        title: 'Ética',
        description: 'Recoñecemos a importancia de abordar as implicacións éticas do desenvolvemento e uso da IA'
      }
    },
    scholarship: {
      title: 'Proxectos open source da edición 2025',
      description: 'Descobre os proxectos desenvolvidos na edición anterior das Bolsas de Verán ANFAIA e explora o traballo realizado polos participantes no noso ecosistema open source.',
      githubText: '',
      githubButton: 'Ver Proxectos en GitHub'
    },
    youtube: {
      title: 'Conferencias de Verán',
      description: 'Visita o noso canal de YouTube para explorar as conferencias de verán e contido educativo sobre IA:',
      button: 'Ver Canal de YouTube'
    },
    newsletter: {
      title: 'Mantente Informado',
      description: 'Queres recibir información sobre as nosas actividades? Déixanos os teus datos para manterte ao tanto do que sucede:',
      button: 'Únete á nosa lista'
    },
    readNewsletter: {
      title: 'Newsletter de Noticias sobre IA',
      description: 'Mantente ao día coa actualidade da intelixencia artificial. Le a nosa newsletter de noticias sobre IA, sen necesidade de subscribirte:',
      button: 'Ler newsletter'
    },
    discord: {
      title: 'Únete á Comunidade',
      description: 'Conecta con outros membros de ANFAIA, participa en debates sobre IA e mantente ao día no noso servidor de Discord:',
      button: 'Unirse a Discord'
    },
    ethics: {
      title: 'O noso Compromiso Ético',
      description: 'En ANFAIA, cremos firmemente que o desenvolvemento e a implementación da Intelixencia Artificial deben estar guiados por sólidos principios éticos. Comprometémonos a:',
      commitments: [
        'Promover a transparencia nos algoritmos de IA',
        'Xerar e traballar con fontes de datos abertas',
        'Fomentar a equidade e evitar sesgos discriminatorios',
        'Considerar o impacto social e ambiental das nosas tecnoloxías',
        'Educar sobre o uso responsable da IA'
      ],
      conclusion: 'Traballamos en estreita colaboración con expertos en ética, lexisladores e a comunidade para asegurar que os nosos proxectos de IA beneficien á sociedade no seu conxunto.'
    },
    footer: {
      quickLinks: 'Enlaces Rápidos',
      contact: 'Contacto',
      copyright: '© 2025 ANFAIA - Todos os dereitos reservados.',
      legalNotice: 'Aviso Legal',
      privacyPolicy: 'Política de Privacidade'
    },
    blog: {
      title: 'Blog',
      latestPost: 'Última Entrada do Blog',
      readMore: 'Ler máis',
      allPosts: 'Ver todas as entradas'
    },
    announcement: {
      title: 'Bolsas de Verán ANFAIA 2026',
      subtitle: '',
      dateLabel: 'Prazo de inscrición pechado',
      dateRange: '',
      description: 'Durante o verán os participantes desenvolverán proxectos de intelixencia artificial en diferentes ámbitos, publicando os resultados como software de código aberto.'
    }
  }
};

// Language detection function
export function detectLanguage(): Language {
  if (typeof window === 'undefined') return 'en'; // Default for SSR
  
  // Check if user has manually selected a language
  const savedLanguage = localStorage.getItem('anfaia-language') as Language;
  if (savedLanguage && ['es', 'en', 'gl'].includes(savedLanguage)) {
    return savedLanguage;
  }
  
  const browserLang = navigator.language.toLowerCase();
  const langCode = browserLang.split('-')[0];
  
  // Spanish-speaking regions and Catalan/Basque -> Spanish
  if (['es', 'ca', 'eu'].includes(langCode)) {
    return 'es';
  }
  
  // Galician
  if (langCode === 'gl') {
    return 'gl';
  }
  
  // Default to English for all other languages
  return 'en';
}

// Hook for using translations
export function useTranslations() {
  const [language, setLanguage] = useState<Language>('en');
  
  useEffect(() => {
    const detectedLanguage = detectLanguage();
    setLanguage(detectedLanguage);
    
    // Update metadata on initial load
    updateMetadata(detectedLanguage);
  }, []);
  
  return {
    t: translations[language],
    language,
    setLanguage // This is mainly for the language switcher to know current language
  };
}

// Helper function to update metadata
function updateMetadata(language: Language) {
  const titles = {
    es: 'ANFAIA - Impulsando el Progreso con Inteligencia Artificial',
    en: 'ANFAIA - Driving Progress with Artificial Intelligence', 
    gl: 'ANFAIA - Impulsando o Progreso coa Intelixencia Artificial'
  };
  
  const descriptions = {
    es: 'ANFAIA lidera proyectos innovadores en cultura, arte, salud, robótica y sostenibilidad ambiental. Utilizando la IA para crear un futuro mejor y ético.',
    en: 'ANFAIA leads innovative projects in culture, art, health, robotics, and environmental sustainability. Using AI to create a better and ethical future.',
    gl: 'ANFAIA lidera proxectos innovadores en cultura, arte, saúde, robótica e sustentabilidade ambiental. Usando a IA para crear un futuro mellor e ético.'
  };
  
  document.title = titles[language];
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', descriptions[language]);
  }
  
  // Update Open Graph meta tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  
  if (ogTitle) {
    ogTitle.setAttribute('content', titles[language]);
  }
  if (ogDescription) {
    ogDescription.setAttribute('content', descriptions[language]);
  }
}
