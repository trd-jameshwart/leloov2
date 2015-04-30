-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2015 at 12:10 PM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `leloo`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE IF NOT EXISTS `user_info` (
`id` int(11) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(20) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`id`, `full_name`, `user_email`, `user_password`) VALUES
(1, 'Jameshwart Lopez', 'jameshwartlopez@gmail.com', 'admin'),
(2, 'jameshwartlopez', 'jameshwart@gmail.com', 'admin'),
(3, 'jameshwartlopez', 'jameshwartlopez@gmail.com', 'asdf'),
(4, 'asdf sdf', 'sdfsdfeeeererer@gmail.com', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `user_review`
--

CREATE TABLE IF NOT EXISTS `user_review` (
`id` int(11) NOT NULL,
  `placeid` text NOT NULL,
  `user_info_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `reviewtext` text NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `user_review`
--

INSERT INTO `user_review` (`id`, `placeid`, `user_info_id`, `rating`, `reviewtext`) VALUES
(1, 'ChIJt8OJwkqZqTMR2ElkwpWGSj4', 2, 3, '          dddddddddddddddddddddd              d'),
(2, 'ChIJt8OJwkqZqTMR2ElkwpWGSj4', 2, 3, '          dddddddddddddddddddddd              d'),
(3, 'ChIJwzeb80uZqTMRKAPyha69YxY', 2, 3, 'xxx '),
(4, 'ChIJwzeb80uZqTMRKAPyha69YxY', 2, 5, 'xxx '),
(5, 'ChIJPQZiOEqZqTMR3atJATSyEX4', 2, 3, 'xxx '),
(6, 'ChIJCbYbV7GeqTMR_in9lFZrjO0', 2, 3, 'nice lang');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
 ADD PRIMARY KEY (`id`,`user_email`);

--
-- Indexes for table `user_review`
--
ALTER TABLE `user_review`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_info`
--
ALTER TABLE `user_info`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `user_review`
--
ALTER TABLE `user_review`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
