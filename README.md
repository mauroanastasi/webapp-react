# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
------------------------------------------------------------------------------------
 Setup Web App React
repo: webapp-react
Esercizio
Ora è il momento di prepararci al frontend della nostra Web App!
MILESTONE 1
Mettiamo su un nuovo progetto React aiutandoci con Vite
Ripuliamo come sempre l’app da file e codice di esempio non necessari
Installiamo il necessario: React Router, Axios (oggi non è obbligatorio installarlo, lo sarà martedì) e Bootstrap (se volete utilizzarlo)
MILESTONE 2
Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine.
Creiamo 2 pagine:
La home, in cui mostreremo la lista dei film
La pagina di dettaglio di un singolo film in cui mostrare sia le informazioni del film che le recensioni
Fate tutto statico.
Bonus
Create un array finto di film da ciclare e mostrare nella homepage
Creare la componente MovieCard in cui passare tramite props il singolo libro
SUPER BONUS: Nella pagina di dettaglio del film copiate l'array dei film aggiungendo a ciascun oggetto un'array di recensioni. Trovate l'elemento all'interno dell'array da mostrare nella pagina attraverso l'id che avete passato come parametro e mostratelo in pagina assieme alle sue recensioni
---------------------------------------------------------------------------------------------------------------
Setup Web App React
repo: webapp-react e webapp-express
MILESTONE 1
Configuriamo l’app di backend (repo webapp-express) a ricevere chiamate dalla nostra applicazione React, installando e impostando il middleware CORS (npm i cors)
Installate axios nell'app frontend e provate quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei libri
MILESTONE 2
In ultimo, effettuiamo una chiamata AJAX dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni
Bonus
Realizzare una componente StarsRating in cui mostrare il voto delle recensioni (magari anche il voto medio, chissà....)
Curare l’aspetto estetico della vostra applicazione