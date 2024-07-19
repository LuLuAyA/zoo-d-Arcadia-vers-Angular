-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 19 juil. 2024 à 09:37
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `zoo d'arcadia`
--

-- --------------------------------------------------------

--
-- Structure de la table `base_de_donnee_administrateur`
--

CREATE TABLE `base_de_donnee_administrateur` (
  `id` int(11) NOT NULL,
  `nom` varchar(32) NOT NULL,
  `prénom` varchar(32) NOT NULL,
  `adresse_email` varchar(32) NOT NULL,
  `mot_de_passe` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='base de donnée administrateur';

-- --------------------------------------------------------

--
-- Structure de la table `base_de_donnee_soigneur`
--

CREATE TABLE `base_de_donnee_soigneur` (
  `id` int(11) NOT NULL,
  `nom` varchar(32) NOT NULL,
  `prénom` varchar(32) NOT NULL,
  `adresse_email` varchar(32) NOT NULL,
  `mot_de_passe` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='base de donnée administrateur';

-- --------------------------------------------------------

--
-- Structure de la table `base_de_donnee_veterinaire`
--

CREATE TABLE `base_de_donnee_veterinaire` (
  `id` int(11) NOT NULL,
  `adresse email` varchar(32) NOT NULL,
  `user name` varchar(32) NOT NULL,
  `mot de passe` varchar(32) NOT NULL,
  `état de santé de l'animal` text NOT NULL,
  `repas donnée` text NOT NULL,
  `quantité donnée en Kg` int(250) NOT NULL,
  `date et heure de passage` timestamp NOT NULL DEFAULT current_timestamp(),
  `état de l'habitat` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `soins réaliser` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='base de donnée vétérinaire';

-- --------------------------------------------------------

--
-- Structure de la table `base_de_donnee_visiteurs`
--

CREATE TABLE `base_de_donnee_visiteurs` (
  `id` int(50) NOT NULL,
  `adresse email` varchar(32) NOT NULL,
  `nombre de personne` int(50) NOT NULL,
  `date de réservation` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='base de donnée visiteurs';

-- --------------------------------------------------------

--
-- Structure de la table `formulaire_nouveau_arrivant`
--

CREATE TABLE `formulaire_nouveau_arrivant` (
  `id` int(11) NOT NULL,
  `nom` varchar(32) NOT NULL,
  `prenom` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  `user_name` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='attribution d''un id au nouveau arrivant';

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `base_de_donnee_administrateur`
--
ALTER TABLE `base_de_donnee_administrateur`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `base_de_donnee_soigneur`
--
ALTER TABLE `base_de_donnee_soigneur`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `base_de_donnee_veterinaire`
--
ALTER TABLE `base_de_donnee_veterinaire`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `base_de_donnee_visiteurs`
--
ALTER TABLE `base_de_donnee_visiteurs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `formulaire_nouveau_arrivant`
--
ALTER TABLE `formulaire_nouveau_arrivant`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `base_de_donnee_administrateur`
--
ALTER TABLE `base_de_donnee_administrateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `base_de_donnee_soigneur`
--
ALTER TABLE `base_de_donnee_soigneur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `base_de_donnee_veterinaire`
--
ALTER TABLE `base_de_donnee_veterinaire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `base_de_donnee_visiteurs`
--
ALTER TABLE `base_de_donnee_visiteurs`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `formulaire_nouveau_arrivant`
--
ALTER TABLE `formulaire_nouveau_arrivant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
