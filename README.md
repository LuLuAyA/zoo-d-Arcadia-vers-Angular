**Procédure de mise en déployement local:**

- Ouvrir un nouveau terminal et taper : ng serve -o puis entrée
- Le navigateur vas souvrir tout seul et afficher la page local: http://localhost:4200/

**La procédure de mise en place de GIT**

- Aller sur le site https://github.com/dashboard et cliquer sur "new" puis entrée
- Dans "repository name" saisir le nom de votre projet 
    on peut ajouter un commentaire dans "Description"
    selectionner "Public" ou "Private"
    "Add a README file" est la pour vous crée un fichier readme, cocher la case ou pas en fonction de votre besoin
    pui cliquer sur "Create repository"

- La page de procédure viens de souvrire, il faut maintenant lié le GIT avec le local
    ouvrir un terminal et saisir la commande suivante : git init
    puis lié le repository avec votre local avec la comande suivante:
     git remote add origin https://github.com/LuLuAyA/test.git

- Une fois lié on procede a la capture de sons poste de travail avec la commande : git add .

- Une fois capturer on procede a un enregistrement de la capture dans la version de sauveguarde avec la commande : git commit -m "message pour preciser" puis entrée

- Une fois commiter on vas pousser l'enregistrement sur le repository avec la commande :
git push origin main

- Aprés cela votre enregistrement sera présent sur votre GIT


**Création du fichier de base de données SQL**



**Manuel d'utilisation**


**Documentation de la gestion de projet**
https://trello.com/invite/b/ZZcZFVfL/ATTId5929e2c4a891ca5172b54f7595d86c3009A4785/ecf-zoo-darcadia

**Documentation technique de l'application**

    environement de travail

    - node : 20.11.0
    - npm : 10.2.4
    - angular : 17.2.0

    Front:
    - bootstrap : 5.3.3
    - HTML 5
    - CSS
    - JS

    Deploiment local :
    - Xamp : 3.3.0
    - apache : 2.4.58

    Back-end:
    - php 8.0.30
    Base de données relationnelle:
    - phpMyadmin : 5.2.1



