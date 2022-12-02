-- MySQL dump 10.13  Distrib 5.7.38, for Win32 (AMD64)
--
-- Host: localhost    Database: school
-- ------------------------------------------------------
-- Server version	5.7.38-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `allstudent`
--

DROP TABLE IF EXISTS `allstudent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `allstudent` (
  `register_id` int(6) NOT NULL AUTO_INCREMENT,
  `date` varchar(50) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `sex` varchar(7) DEFAULT NULL,
  `age` varchar(2) DEFAULT NULL,
  `grade` varchar(2) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `ref_name` varchar(100) DEFAULT NULL,
  `relation` varchar(20) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `phone` char(10) DEFAULT NULL,
  PRIMARY KEY (`register_id`)
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `allstudent`
--

LOCK TABLES `allstudent` WRITE;
/*!40000 ALTER TABLE `allstudent` DISABLE KEYS */;
INSERT INTO `allstudent` VALUES (100,'2022-11-18','zemelat','Female','12','4','[object Object]','menber','father','kebele-02','0923419019'),(101,'2022-11-18','fdgfdgdf','Female','13','3','[object Object]','fdgf','dfgdfg','dfgdfg','fdgfd'),(102,'2022-11-18','beruk','Female','5','','image-1668842354179.Untitled.png','maki','father','03','023419019');
/*!40000 ALTER TABLE `allstudent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scoresheet`
--

DROP TABLE IF EXISTS `scoresheet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scoresheet` (
  `score_id` int(4) NOT NULL AUTO_INCREMENT,
  `subject_name` varchar(50) DEFAULT NULL,
  `student_id` int(6) NOT NULL,
  `quiz1` int(2) DEFAULT NULL,
  `mid1` int(2) DEFAULT NULL,
  `quiz2` int(2) DEFAULT NULL,
  `mid2` int(2) DEFAULT NULL,
  `final` int(2) DEFAULT NULL,
  PRIMARY KEY (`score_id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `scoresheet_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `allstudent` (`register_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scoresheet`
--

LOCK TABLES `scoresheet` WRITE;
/*!40000 ALTER TABLE `scoresheet` DISABLE KEYS */;
INSERT INTO `scoresheet` VALUES (1,'English',100,5,4,3,1,17),(2,'Mathes',100,5,4,3,1,17),(4,'Mathes',101,5,4,3,1,17),(5,'Mathes',101,5,4,3,1,17),(10,'amharic',102,2,2,2,2,50),(11,'GS',102,5,15,5,15,49),(12,'GS',102,5,15,5,15,49),(13,'art',102,5,20,5,20,47),(14,'art',100,3,10,3,10,43),(15,'art',100,4,5,4,4,40);
/*!40000 ALTER TABLE `scoresheet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) DEFAULT 'user',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','$2b$08$pMUM1mv/RcLvFFqEUU69X.PLVZNWNnUm6GDlZeK5jNviSNlpU1LA6','admin'),(2,'zemelat','$2b$08$mj9EwPXDiYYTiMLtLeDu9.RgYcx3VwrSxKK7zID6UuWD12v3kyC8C','user'),(3,'alex','$2b$08$RJB8FNx9roJt1jBxQ34qB.jdIKbEnL0Xhf/EBVCKpLNOimTfenLvm','user'),(4,'neww','$2b$08$e6O1IcsiNvoCQHGdRTDTvu2M0LT4k/3uGDgjZCZHzP8Sik2WA.Ifm','user'),(5,'abebe','$2b$08$RN8Ulpvx19HD52nz0WbrOOSI7ZKDxQrrmjuPUWEQnqP7M2jL/b08y','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-02  1:48:12
