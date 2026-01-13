# HRNet UI Library

Une collection de composants d’interface utilisateur modulaires, construits selon un paradigme de **programmation fonctionnelle** avec **React** et **Tailwind CSS**.

---

## 🚀 Composants

## 1. Modal

Un composant fonctionnel pur destiné à l’affichage de fenêtres modales (superposées).

### Propriétés (props)

- `children` (**ReactNode**)  
  Contenu à injecter dans la fenêtre modale.

- `onClose` (**Function**)  
  Fonction de rappel permettant de gérer la fermeture (ex. : mise à jour d’un état parent).

### Exemple d’utilisation

```js
<Modal onClose={() => setIsOpen(false)}>
  <h3>Action réussie</h3>
</Modal>
```

---

## 2. Toast

Un système de notifications léger, modulaire et impératif, conçu pour être utilisé partout dans l’application.

#### Description

Le module permet d’afficher des messages temporaires :

- succès
- erreur
- information

Il gère automatiquement :

- la création du conteneur dans le DOM
- le rendu React
- les animations
- le nettoyage (_unmount_)

Aucun composant n’est requis dans le JSX.

---

#### Structure

```txt
toast/
├─ toast.jsx
└─ ToastContent.jsx
```

#### Utilisation

```js
import { toast } from "./toast/toast";

toast.success("Employé créé avec succès !");
toast.error("Échec de la sauvegarde.");
toast.info("Le formulaire a été réinitialisé.");
```
