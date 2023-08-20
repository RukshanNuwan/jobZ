import { View, Text } from 'react-native';

import styles from './about.style';

const About = ({ info }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headText}>About the job:</View>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default About;
