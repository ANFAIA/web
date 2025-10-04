import BlogPostClient from './BlogPostClient'

// Blog posts data - should match the data in blog/page.tsx
const blogPosts = [
  {
    slug: 'clausura-becas-verano-2025',
    title: {
      es: 'Clausura de las Becas de Verano ANFAIA 2025: jóvenes investigadores impulsan proyectos de IA con impacto social',
      en: 'Closing Ceremony of ANFAIA Summer Scholarships 2025: Young Researchers Drive AI Projects with Social Impact',
      gl: 'Clausura das Bolsas de Verán ANFAIA 2025: mozos investigadores impulsan proxectos de IA con impacto social'
    },
    summary: {
      es: 'El pasado jueves 25 de septiembre, la Asociación ANFAIA celebró el acto de clausura de las Becas de Verano ANFAIA 2025 sobre Inteligencia Artificial, un programa que durante los meses de julio y agosto reunió a cinco jóvenes investigadores en torno a proyectos innovadores con impacto social.',
      en: 'Last Thursday, September 25th, the ANFAIA Association held the closing ceremony of the ANFAIA Summer Scholarships 2025 on Artificial Intelligence, a program that during the months of July and August brought together five young researchers around innovative projects with social impact.',
      gl: 'O pasado xoves 25 de setembro, a Asociación ANFAIA celebrou o acto de clausura das Bolsas de Verán ANFAIA 2025 sobre Intelixencia Artificial, un programa que durante os meses de xullo e agosto reuniu a cinco mozos investigadores ao redor de proxectos innovadores con impacto social.'
    },
    content: {
      es: `# Clausura de las Becas de Verano ANFAIA 2025: jóvenes investigadores impulsan proyectos de IA con impacto social

El pasado jueves 25 de septiembre, la Asociación ANFAIA celebró el acto de clausura de las Becas de Verano ANFAIA 2025 sobre Inteligencia Artificial, un programa que durante los meses de julio y agosto reunió a cinco jóvenes investigadores en torno a proyectos innovadores con impacto social. La cita supuso un espacio de reflexión, aprendizaje y presentación de iniciativas que combinan creatividad y tecnología, destacando el valor de la inteligencia artificial como herramienta de transformación en distintos ámbitos de la sociedad.

Durante la jornada, los participantes presentaron sus cinco proyectos desarrollados a lo largo de los últimos dos meses, abarcando salud remota, educación inclusiva, automatización de procesos, impacto medioambiental y cultura digital. Todos los trabajos se han concebido bajo la filosofía open source, lo que garantiza su acceso libre para la comunidad y permite que otras personas puedan aprender de ellos, replicarlos o mejorarlos a través de repositorios públicos como GitHub.

## Proyectos destacados y perfiles de los becados

Cada proyecto refleja el perfil y la trayectoria de sus autores, así como la capacidad de adaptarse a un entorno de trabajo interdisciplinario y de aprendizaje acelerado.

- **[IA4Edu](https://github.com/ANFAIA/IA4Edu)**, desarrollado por Carolina Tomás Franco, combina su formación en Psicología y en inteligencia artificial para ofrecer un asistente educativo inclusivo. El asistente de IA que ha creado ayuda a profesores a generar actividades educativas inclusivas adaptadas a diferentes neurotipos (TEA, TDAH, Altas Capacidades)

- **[En Peu](https://github.com/ANFAIA/En-Peu)**, liderado por Hugo Suárez González, propone un sistema de predicción de inundaciones mediante IA aplicada a variables medioambientales, en colaboración con Fundación Matrix. Su objetivo es anticipar fenómenos climáticos extremos, como las recientes inundaciones en Valencia, y contribuir a reducir riesgos mediante la aplicación de la solución en diferentes zonas vulnerables, empezando por un municipio piloto, Paiporta.

- **[Saúde Remota](https://github.com/ANFAIA/Saude-Remota)**, por Irene Gallardo Sierra, estudiante de Ingeniería Biomédica en la Universidade de Vigo, es un sistema remoto de constantes vitales con microcontroladores ESP32 y sensores biométricos. Utiliza inteligencia artificial para identificar datos de riesgo a partir de parámetros como frecuencia cardíaca, saturación de oxígeno y temperatura, con la finalidad de mejorar la prevención y el seguimiento de pacientes.

- **[GalicIA](https://github.com/ANFAIA/GalicIA)**, impulsado por Pablo Pajón Area, ingeniero informático por la UDC, se centra en la creación del mayor dataset público de poesía gallega (texto y audio) y desarrollo de modelos de lenguaje especializados en gallego poético. A través de un dataset más amplio y accesible, busca aumentar la visibilidad de este patrimonio cultural en internet, fortaleciendo su posicionamiento y acceso global.

- **[GLPI-AssistIA](https://github.com/ANFAIA/GLPI-AssistIA)**, desarrollado por Anxo López Rodríguez, estudiante de Inteligencia Artificial en la Universidade de Vigo, es una integración de agentes de IA, que facilita la gestión de incidencias automatizando el proceso en una herramienta open source como GLPI, mejorando la eficiencia y el soporte en helpdesk.

Cada proyecto surgió de un proceso creativo y técnico que implicó enfrentar retos y aprender sobre la marcha. Algunos becados, como Hugo, contaban con ideas más estructuradas desde el inicio, mientras que otros, como Irene y Carolina, partieron de estudio menos técnico, enfrentándose al desafío de aplicar la tecnología a problemas concretos de impacto social. Pablo y Anxo, con formación técnica, también tuvieron que adaptarse y explorar nuevas áreas para dar forma a sus propuestas.

## Mentores, apoyo institucional y aprendizaje colaborativo

El programa contó con el acompañamiento de ocho mentores especializados, cuya guía resultó fundamental para que los participantes transformaran las dificultades en logros tangibles. Además, AITIRE, Fundación Matrix y Feuga ofrecieron soporte institucional, patrocinio y acceso a datos, consolidando un ecosistema de colaboración entre academia, empresa y sociedad civil.

La experiencia de los becados estuvo marcada por la interacción constante con los mentores, quienes no solo guiaron en cuestiones técnicas, sino que también alentaron a los jóvenes a superar bloqueos y a mantener una visión crítica y creativa sobre sus proyectos. Como señaló Ismael Faro, presidente de ANFAIA: "Pocas veces se puede juntar a gente tan talentosa y poder crear algo tan increíble. Es posible que hayáis pasado la parte más difícil, que es empezar, y a partir de ahí conseguiréis cosas increíbles."

Por su parte, Miguel González, mentor de ANFAIA, destacó la importancia de aprovechar las oportunidades que ofrecen las últimas tecnologías: "Nos enfrentamos a un reto nuevo que son las últimas tecnologías y es el momento de hacer este tipo de cosas. En el futuro nos tenemos que montar en este tren y combinar lo de siempre con la IA de cara a nuestra supervivencia."

## Reflexión sobre la experiencia y perspectivas futuras

Durante el acto de clausura, los becados y los mentores compartieron un panel de reflexión sobre el futuro de la inteligencia artificial responsable, abordando retos éticos, oportunidades de innovación abierta y la necesidad de combinar conocimientos técnicos con sensibilidad social.

Los participantes coincidieron en que, aunque hoy abordarían los proyectos de otra manera, la experiencia adquirida les ha proporcionado confianza y habilidades para optimizar sus iniciativas y afrontar nuevos desafíos. "Es un empujón para aprender y salir de tu zona de confort. Es una forma de poner a prueba tus habilidades y exponer tu potencial, con la ayuda de grandes mentores. Son dos meses de aprender muchísimo y muy rápido", señalaba Irene Gallardo.

Con la clausura de la edición 2025, ANFAIA reafirma su apuesta por la formación práctica, la transferencia de conocimiento y el compromiso social en torno a la inteligencia artificial, consolidando un modelo que combina aprendizaje acelerado, innovación abierta y colaboración multidisciplinar.

Los cinco proyectos ya están disponibles en GitHub, lo que permite que la comunidad pueda continuar explorando, mejorando y aplicando las soluciones desarrolladas. Para los becados, este es solo el primer paso de un camino que promete seguir creciendo, impulsado por la creatividad, el aprendizaje colaborativo y la capacidad de transformar la inteligencia artificial en una herramienta al servicio de la sociedad.`,
      en: `# Closing Ceremony of ANFAIA Summer Scholarships 2025: Young Researchers Drive AI Projects with Social Impact

Last Thursday, September 25th, the ANFAIA Association held the closing ceremony of the ANFAIA Summer Scholarships 2025 on Artificial Intelligence, a program that during the months of July and August brought together five young researchers around innovative projects with social impact. The event provided a space for reflection, learning, and presentation of initiatives that combine creativity and technology, highlighting the value of artificial intelligence as a transformation tool in different areas of society.

During the event, participants presented their five projects developed over the last two months, covering remote health, inclusive education, process automation, environmental impact, and digital culture. All works were conceived under the open source philosophy, which guarantees free access for the community and allows others to learn from them, replicate them, or improve them through public repositories such as GitHub.

## Featured Projects and Scholarship Recipients' Profiles

Each project reflects the profile and trajectory of its authors, as well as the ability to adapt to an interdisciplinary work environment and accelerated learning.

- **[IA4Edu](https://github.com/ANFAIA/IA4Edu)**, developed by Carolina Tomás Franco, combines her training in Psychology and artificial intelligence to offer an inclusive educational assistant. The AI assistant she created helps teachers generate inclusive educational activities adapted to different neurotypes (ASD, ADHD, High Abilities)

- **[En Peu](https://github.com/ANFAIA/En-Peu)**, led by Hugo Suárez González, proposes a flood prediction system using AI applied to environmental variables, in collaboration with Fundación Matrix. Its objective is to anticipate extreme weather events, such as the recent floods in Valencia, and contribute to reducing risks through the application of the solution in different vulnerable areas, starting with a pilot municipality, Paiporta.

- **[Saúde Remota](https://github.com/ANFAIA/Saude-Remota)**, by Irene Gallardo Sierra, a Biomedical Engineering student at the Universidade de Vigo, is a remote vital signs system with ESP32 microcontrollers and biometric sensors. It uses artificial intelligence to identify risk data from parameters such as heart rate, oxygen saturation, and temperature, with the aim of improving prevention and patient monitoring.

- **[GalicIA](https://github.com/ANFAIA/GalicIA)**, promoted by Pablo Pajón Area, a computer engineer from UDC, focuses on creating the largest public dataset of Galician poetry (text and audio) and developing language models specialized in Galician poetry. Through a broader and more accessible dataset, it seeks to increase the visibility of this cultural heritage on the internet, strengthening its positioning and global access.

- **[GLPI-AssistIA](https://github.com/ANFAIA/GLPI-AssistIA)**, developed by Anxo López Rodríguez, an Artificial Intelligence student at the Universidade de Vigo, is an integration of AI agents that facilitates incident management by automating the process in an open source tool like GLPI, improving efficiency and helpdesk support.

Each project emerged from a creative and technical process that involved facing challenges and learning on the go. Some scholarship recipients, like Hugo, had more structured ideas from the start, while others, like Irene and Carolina, came from less technical backgrounds, facing the challenge of applying technology to specific problems with social impact. Pablo and Anxo, with technical training, also had to adapt and explore new areas to shape their proposals.

## Mentors, Institutional Support, and Collaborative Learning

The program had the accompaniment of eight specialized mentors, whose guidance was fundamental for participants to transform difficulties into tangible achievements. In addition, AITIRE, Fundación Matrix, and Feuga offered institutional support, sponsorship, and data access, consolidating an ecosystem of collaboration between academia, business, and civil society.

The scholarship recipients' experience was marked by constant interaction with mentors, who not only guided on technical matters but also encouraged young people to overcome blockages and maintain a critical and creative vision of their projects. As Ismael Faro, president of ANFAIA, noted: "Rarely can you bring together such talented people and create something so incredible. You may have passed the most difficult part, which is starting, and from there you will achieve incredible things."

For his part, Miguel González, ANFAIA mentor, highlighted the importance of taking advantage of the opportunities offered by the latest technologies: "We face a new challenge which is the latest technologies and it is time to do this kind of thing. In the future we have to get on this train and combine the usual with AI for our survival."

## Reflection on the Experience and Future Perspectives

During the closing ceremony, scholarship recipients and mentors shared a reflection panel on the future of responsible artificial intelligence, addressing ethical challenges, open innovation opportunities, and the need to combine technical knowledge with social sensitivity.

Participants agreed that, although today they would approach the projects differently, the experience gained has provided them with confidence and skills to optimize their initiatives and face new challenges. "It's a push to learn and get out of your comfort zone. It's a way to test your skills and expose your potential, with the help of great mentors. It's two months of learning a lot and very quickly," said Irene Gallardo.

With the closing of the 2025 edition, ANFAIA reaffirms its commitment to practical training, knowledge transfer, and social commitment around artificial intelligence, consolidating a model that combines accelerated learning, open innovation, and multidisciplinary collaboration.

The five projects are now available on GitHub, which allows the community to continue exploring, improving, and applying the developed solutions. For the scholarship recipients, this is just the first step of a journey that promises to continue growing, driven by creativity, collaborative learning, and the ability to transform artificial intelligence into a tool at the service of society.`,
      gl: `# Clausura das Bolsas de Verán ANFAIA 2025: mozos investigadores impulsan proxectos de IA con impacto social

O pasado xoves 25 de setembro, a Asociación ANFAIA celebrou o acto de clausura das Bolsas de Verán ANFAIA 2025 sobre Intelixencia Artificial, un programa que durante os meses de xullo e agosto reuniu a cinco mozos investigadores ao redor de proxectos innovadores con impacto social. A cita supuxo un espazo de reflexión, aprendizaxe e presentación de iniciativas que combinan creatividade e tecnoloxía, destacando o valor da intelixencia artificial como ferramenta de transformación en distintos ámbitos da sociedade.

Durante a xornada, os participantes presentaron os seus cinco proxectos desenvolvidos ao longo dos últimos dous meses, abarcando saúde remota, educación inclusiva, automatización de procesos, impacto medioambiental e cultura dixital. Todos os traballos foron concibidos baixo a filosofía open source, o que garante o seu acceso libre para a comunidade e permite que outras persoas poidan aprender deles, replicalos ou melloralos a través de repositorios públicos como GitHub.

## Proxectos destacados e perfís dos bolseiros

Cada proxecto reflicte o perfil e a traxectoria dos seus autores, así como a capacidade de adaptarse a un entorno de traballo interdisciplinario e de aprendizaxe acelerada.

- **[IA4Edu](https://github.com/ANFAIA/IA4Edu)**, desenvolvido por Carolina Tomás Franco, combina a súa formación en Psicoloxía e en intelixencia artificial para ofrecer un asistente educativo inclusivo. O asistente de IA que creou axuda a profesores a xerar actividades educativas inclusivas adaptadas a diferentes neurotipos (TEA, TDAH, Altas Capacidades)

- **[En Peu](https://github.com/ANFAIA/En-Peu)**, liderado por Hugo Suárez González, propón un sistema de predición de inundacións mediante IA aplicada a variables medioambientais, en colaboración con Fundación Matrix. O seu obxectivo é anticipar fenómenos climáticos extremos, como as recentes inundacións en Valencia, e contribuír a reducir riscos mediante a aplicación da solución en diferentes zonas vulnerables, comezando por un municipio piloto, Paiporta.

- **[Saúde Remota](https://github.com/ANFAIA/Saude-Remota)**, por Irene Gallardo Sierra, estudante de Enxeñaría Biomédica na Universidade de Vigo, é un sistema remoto de constantes vitais con microcontroladores ESP32 e sensores biométricos. Utiliza intelixencia artificial para identificar datos de risco a partir de parámetros como frecuencia cardíaca, saturación de osíxeno e temperatura, coa finalidade de mellorar a prevención e o seguimento de pacientes.

- **[GalicIA](https://github.com/ANFAIA/GalicIA)**, impulsado por Pablo Pajón Area, enxeñeiro informático pola UDC, céntrase na creación do maior dataset público de poesía galega (texto e audio) e desenvolvemento de modelos de linguaxe especializados en galego poético. A través dun dataset máis amplo e accesible, busca aumentar a visibilidade deste patrimonio cultural en internet, fortalecendo o seu posicionamento e acceso global.

- **[GLPI-AssistIA](https://github.com/ANFAIA/GLPI-AssistIA)**, desenvolvido por Anxo López Rodríguez, estudante de Intelixencia Artificial na Universidade de Vigo, é unha integración de axentes de IA, que facilita a xestión de incidencias automatizando o proceso nunha ferramenta open source como GLPI, mellorando a eficiencia e o soporte en helpdesk.

Cada proxecto xurdiu dun proceso creativo e técnico que implicou enfrontar retos e aprender sobre a marcha. Algúns bolseiros, como Hugo, contaban con ideas máis estruturadas desde o inicio, mentres que outros, como Irene e Carolina, partiron de estudo menos técnico, enfrontándose ao desafío de aplicar a tecnoloxía a problemas concretos de impacto social. Pablo e Anxo, con formación técnica, tamén tiveron que adaptarse e explorar novas áreas para dar forma ás súas propostas.

## Mentores, apoio institucional e aprendizaxe colaborativa

O programa contou co acompañamento de oito mentores especializados, cuxa guía resultou fundamental para que os participantes transformaran as dificultades en logros tanxibles. Ademais, AITIRE, Fundación Matrix e Feuga ofreceron soporte institucional, patrocinio e acceso a datos, consolidando un ecosistema de colaboración entre academia, empresa e sociedade civil.

A experiencia dos bolseiros estivo marcada pola interacción constante cos mentores, quen non só guiaron en cuestións técnicas, senón que tamén alentaron aos mozos a superar bloqueos e a manter unha visión crítica e creativa sobre os seus proxectos. Como sinalou Ismael Faro, presidente de ANFAIA: "Poucas veces se pode xuntar a xente tan talentosa e poder crear algo tan incrível. É posible que pasásedes a parte máis difícil, que é comezar, e a partir de aí conseguiredes cousas incribles."

Pola súa parte, Miguel González, mentor de ANFAIA, destacou a importancia de aproveitar as oportunidades que ofrecen as últimas tecnoloxías: "Enfrontámonos a un reto novo que son as últimas tecnoloxías e é o momento de facer este tipo de cousas. No futuro temos que montarnos neste tren e combinar o de sempre coa IA de cara á nosa supervivencia."

## Reflexión sobre a experiencia e perspectivas futuras

Durante o acto de clausura, os bolseiros e os mentores compartiron un panel de reflexión sobre o futuro da intelixencia artificial responsable, abordando retos éticos, oportunidades de innovación aberta e a necesidade de combinar coñecementos técnicos con sensibilidade social.

Os participantes coincidiron en que, aínda que hoxe abordarían os proxectos doutra maneira, a experiencia adquirida proporcionoulles confianza e habilidades para optimizar as súas iniciativas e afrontar novos desafíos. "É un empurrón para aprender e saír da túa zona de confort. É unha forma de poñer á proba as túas habilidades e expoñer o teu potencial, coa axuda de grandes mentores. Son dous meses de aprender moitísimo e moi rápido", sinalaba Irene Gallardo.

Coa clausura da edición 2025, ANFAIA reafirma a súa aposta pola formación práctica, a transferencia de coñecemento e o compromiso social ao redor da intelixencia artificial, consolidando un modelo que combina aprendizaxe acelerada, innovación aberta e colaboración multidisciplinar.

Os cinco proxectos xa están dispoñibles en GitHub, o que permite que a comunidade poida continuar explorando, mellorando e aplicando as solucións desenvolvidas. Para os bolseiros, este é só o primeiro paso dun camiño que promete seguir crecendo, impulsado pola creatividade, a aprendizaxe colaborativa e a capacidade de transformar a intelixencia artificial nunha ferramenta ao servizo da sociedade.`
    },
    image: '/blog/images/blog1.jpg',
    date: '2025-10-03'
  },
  {
    slug: 'origen-anfaia-proyectos',
    title: {
      es: 'ANFAIA: Origen, Misión y Proyectos que Transforman la Sociedad con Innovación',
      en: 'ANFAIA: Origin, Mission and Projects Transforming Society with Innovation',
      gl: 'ANFAIA: Orixe, Misión e Proxectos que Transforman a Sociedade con Innovación'
    },
    summary: {
      es: 'Descubre cómo nació ANFAIA, nuestra misión de democratizar la inteligencia artificial y los proyectos innovadores que estamos desarrollando en cultura, salud, educación y sostenibilidad.',
      en: 'Discover how ANFAIA was born, our mission to democratize artificial intelligence and the innovative projects we are developing in culture, health, education and sustainability.',
      gl: 'Descobre como naceu ANFAIA, a nosa misión de democratizar a intelixencia artificial e os proxectos innovadores que estamos desenvolvendo en cultura, saúde, educación e sustentabilidade.'
    },
    content: {
      es: `# ANFAIA: Origen, Misión y Proyectos que Transforman la Sociedad con Innovación

La Asociación Nacional Faro para la Aceleración de la Inteligencia Artificial (ANFAIA) nace con una visión clara: democratizar el acceso a la inteligencia artificial y convertirla en una herramienta al servicio del progreso social. Desde nuestros inicios, hemos trabajado para construir un ecosistema donde la tecnología, la ética y el compromiso social converjan en proyectos con impacto real.

## Nuestro Origen: Una Visión Compartida

ANFAIA surge de la convicción de que la inteligencia artificial no debe ser patrimonio exclusivo de grandes corporaciones o instituciones académicas de élite. Fundada por un grupo de profesionales, investigadores y entusiastas de la innovación tecnológica, nuestra asociación se propone tender puentes entre el conocimiento técnico y las necesidades sociales, promoviendo la innovación abierta y el acceso equitativo a estas tecnologías transformadoras.

Desde el principio, entendimos que la inteligencia artificial tiene el potencial de revolucionar múltiples ámbitos de nuestra sociedad: desde la preservación del patrimonio cultural hasta la mejora de los sistemas de salud, pasando por la educación inclusiva y la lucha contra el cambio climático. Pero este potencial solo puede realizarse plenamente si trabajamos de manera colaborativa, ética y con un profundo sentido de responsabilidad social.

## Nuestra Misión: Innovación Ética y Accesible

En ANFAIA nos guiamos por tres pilares fundamentales:

**Innovación Abierta**: Todos nuestros proyectos se desarrollan bajo filosofía open source, garantizando que el conocimiento generado sea accesible para toda la comunidad. Creemos en la transparencia y en el poder del desarrollo colaborativo.

**Ética y Responsabilidad**: El desarrollo de la inteligencia artificial debe estar guiado por principios éticos sólidos. Nos comprometemos a promover algoritmos transparentes, datos abiertos, equidad en el acceso y una profunda consideración del impacto social y ambiental de nuestras tecnologías.

**Formación y Transferencia de Conocimiento**: A través de programas como nuestras Becas de Verano, formamos a nuevas generaciones de profesionales capaces de aplicar la inteligencia artificial a problemas reales, combinando conocimientos técnicos con sensibilidad social.

## Nuestras Áreas de Acción

**Cultura**: Creemos que la inteligencia artificial tiene el potencial de revolucionar la forma en que creamos, compartimos y experimentamos la cultura.

**Arte**: La intersección entre el arte y la inteligencia artificial ofrece un vasto campo de exploración creativa.

**Salud**: La aplicación de la IA en el campo de la salud tiene el potencial de salvar vidas y mejorar la calidad de vida de millones de personas.

**Robótica/Automatización**: La combinación de IA con automatización y robótica abre un mundo de posibilidades para automatizar tareas y crear sistemas inteligentes.

**Sostenibilidad**: La IA juega un papel crucial en la lucha contra el cambio climático y la promoción de un futuro sostenible.

**Ética**: Reconocemos la importancia de abordar las implicaciones éticas del desarrollo y uso de la IA.

## Un Ecosistema Colaborativo

Ninguno de estos logros sería posible sin nuestro ecosistema de colaboración. Trabajamos estrechamente con instituciones como AITIRE, Fundación Matrix y Feuga, así como con universidades, empresas y la sociedad civil. Nuestros mentores especializados guían a los participantes en cada proyecto, asegurando no solo el éxito técnico sino también el impacto social.

## Mirando al Futuro

Con cada proyecto, con cada becario formado, con cada línea de código abierto, ANFAIA da un paso más hacia su visión: un futuro donde la inteligencia artificial sea una fuerza democratizadora, inclusiva y al servicio del bienestar común.

Este blog es nuestra ventana al mundo. Aquí compartiremos avances, reflexiones, éxitos y aprendizajes. Pero sobre todo, es una invitación a formar parte de esta comunidad que está construyendo el futuro de la innovación tecnológica, un proyecto a la vez.`,
      en: `# ANFAIA: Origin, Mission and Projects Transforming Society with Innovation

The National Lighthouse Association for the Acceleration of Artificial Intelligence (ANFAIA) was born with a clear vision: to democratize access to artificial intelligence and make it a tool at the service of social progress. Since our beginnings, we have worked to build an ecosystem where technology, ethics and social commitment converge in projects with real impact.

## Our Origin: A Shared Vision

ANFAIA emerges from the conviction that artificial intelligence should not be the exclusive patrimony of large corporations or elite academic institutions. Founded by a group of professionals, researchers and technological innovation enthusiasts, our association aims to build bridges between technical knowledge and social needs, promoting open innovation and equitable access to these transformative technologies.

From the beginning, we understood that artificial intelligence has the potential to revolutionize multiple areas of our society: from the preservation of cultural heritage to the improvement of health systems, through inclusive education and the fight against climate change. But this potential can only be fully realized if we work collaboratively, ethically and with a deep sense of social responsibility.

## Our Mission: Ethical and Accessible Innovation

At ANFAIA we are guided by three fundamental pillars:

**Open Innovation**: All our projects are developed under open source philosophy, ensuring that the knowledge generated is accessible to the entire community. We believe in transparency and the power of collaborative development.

**Ethics and Responsibility**: Artificial intelligence development must be guided by solid ethical principles. We commit to promoting transparent algorithms, open data, equity in access and a deep consideration of the social and environmental impact of our technologies.

**Training and Knowledge Transfer**: Through programs such as our Summer Scholarships, we train new generations of professionals capable of applying artificial intelligence to real problems, combining technical knowledge with social sensitivity.

## Our Areas of Action

**Culture**: We believe that artificial intelligence has the potential to revolutionize the way we create, share, and experience culture.

**Art**: The intersection between art and artificial intelligence offers a vast field of creative exploration.

**Health**: The application of AI in the healthcare field has the potential to save lives and improve the quality of life for millions of people.

**Robotics/Automation**: The combination of AI with automation and robotics opens up a world of possibilities for automating tasks and creating intelligent systems.

**Sustainability**: AI plays a crucial role in the fight against climate change and the promotion of a sustainable future.

**Ethics**: We recognize the importance of addressing the ethical implications of AI development and use.

## A Collaborative Ecosystem

None of these achievements would be possible without our collaborative ecosystem. We work closely with institutions such as AITIRE, Fundación Matrix and Feuga, as well as with universities, businesses and civil society. Our specialized mentors guide participants in each project, ensuring not only technical success but also social impact.

## Looking to the Future

With each project, with each trained scholarship recipient, with each line of open source code, ANFAIA takes another step towards its vision: a future where artificial intelligence is a democratizing, inclusive force at the service of the common good.

This blog is our window to the world. Here we will share progress, reflections, successes and learnings. But above all, it is an invitation to be part of this community that is building the future of technological innovation, one project at a time.`,
      gl: `# ANFAIA: Orixe, Misión e Proxectos que Transforman a Sociedade con Innovación

A Asociación Nacional Faro para a Aceleración da Intelixencia Artificial (ANFAIA) nace cunha visión clara: democratizar o acceso á intelixencia artificial e convertela nunha ferramenta ao servizo do progreso social. Desde os nosos inicios, traballamos para construír un ecosistema onde a tecnoloxía, a ética e o compromiso social converxan en proxectos con impacto real.

## A nosa Orixe: Unha Visión Compartida

ANFAIA xurde da convicción de que a intelixencia artificial non debe ser patrimonio exclusivo de grandes corporacións ou institucións académicas de elite. Fundada por un grupo de profesionais, investigadores e entusiastas da innovación tecnolóxica, a nosa asociación propónse tender pontes entre o coñecemento técnico e as necesidades sociais, promovendo a innovación aberta e o acceso equitativo a estas tecnoloxías transformadoras.

Desde o principio, entendemos que a intelixencia artificial ten o potencial de revolucionar múltiples ámbitos da nosa sociedade: desde a preservación do patrimonio cultural ata a mellora dos sistemas de saúde, pasando pola educación inclusiva e a loita contra o cambio climático. Pero este potencial só pode realizarse plenamente se traballamos de maneira colaborativa, ética e cun profundo sentido de responsabilidade social.

## A nosa Misión: Innovación Ética e Accesible

En ANFAIA guiámonos por tres piares fundamentais:

**Innovación Aberta**: Todos os nosos proxectos desenvólvense baixo filosofía open source, garantindo que o coñecemento xerado sexa accesible para toda a comunidade. Cremos na transparencia e no poder do desenvolvemento colaborativo.

**Ética e Responsabilidade**: O desenvolvemento da intelixencia artificial debe estar guiado por principios éticos sólidos. Comprometémonos a promover algoritmos transparentes, datos abertos, equidade no acceso e unha profunda consideración do impacto social e ambiental das nosas tecnoloxías.

**Formación e Transferencia de Coñecemento**: A través de programas como as nosas Bolsas de Verán, formamos novas xeracións de profesionais capaces de aplicar a intelixencia artificial a problemas reais, combinando coñecementos técnicos con sensibilidade social.

## As nosas Áreas de Acción

**Cultura**: Cremos que a intelixencia artificial ten o potencial de revolucionar a forma en que creamos, compartimos e experimentamos a cultura.

**Arte**: A intersección entre a arte e a intelixencia artificial ofrece un vasto campo de exploración creativa.

**Saúde**: A aplicación da IA no campo da saúde ten o potencial de salvar vidas e mellorar a calidade de vida de millóns de persoas.

**Robótica/Automatización**: A combinación de IA coa automatización e robótica abre un mundo de posibilidades para automatizar tarefas e crear sistemas intelixentes.

**Sustentabilidade**: A IA xoga un papel crucial na loita contra o cambio climático e a promoción dun futuro sustentable.

**Ética**: Recoñecemos a importancia de abordar as implicacións éticas do desenvolvemento e uso da IA.

## Un Ecosistema Colaborativo

Ningún destes logros sería posible sen o noso ecosistema de colaboración. Traballamos estreitamente con institucións como AITIRE, Fundación Matrix e Feuga, así como con universidades, empresas e a sociedade civil. Os nosos mentores especializados guían aos participantes en cada proxecto, asegurando non só o éxito técnico senón tamén o impacto social.

## Mirando ao Futuro

Con cada proxecto, con cada bolseiro formado, con cada liña de código aberto, ANFAIA dá un paso máis cara á súa visión: un futuro onde a intelixencia artificial sexa unha forza democratizadora, inclusiva e ao servizo do benestar común.

Este blog é a nosa ventá ao mundo. Aquí compartiremos avances, reflexións, éxitos e aprendizaxes. Pero sobre todo, é un convite a formar parte desta comunidade que está construíndo o futuro da innovación tecnolóxica, un proxecto á vez.`
    },
    image: '/culture.webp',
    date: '2025-10-03'
  }
]

type PageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: PageProps) {
  return <BlogPostClient slug={params.slug} blogPosts={blogPosts} />
}
