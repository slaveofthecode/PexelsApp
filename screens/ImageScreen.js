/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
  Alert,
  PermissionsAndroid,
  Platform,
  ScrollView,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import RNFetchBlob from 'rn-fetch-blob';

const ImageScreen = ({route}) => {
  const {image} = route.params;

  const handleOnPressBtnDownload = async () => {
    const IMAGE_PATH = image.src.original;

    if (Platform.OS === 'ios') {
      downloadImage(IMAGE_PATH);
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download Photos',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          downloadImage(IMAGE_PATH);
        } else {
          alert('Storage Permission Not Granted');
        }
      } catch (error) {
        console.warn(error);
      }
    }
  };

  const downloadImage = imageSrc => {
    const fileNameDownloaded = image.id + '.' + getExtention(imageSrc)[0];
    console.log('FILE -> ', fileNameDownloaded);

    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: PictureDir + '/image_' + fileNameDownloaded,
        description: 'Image',
      },
    };

    config(options)
      .fetch('GET', imageSrc)
      .then(res => {
        alert('Image Downloaded Successfully.');
      });
  };

  const getExtention = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  const handleOnPressPhotographer = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(image.photographer_url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(image.photographer_url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${image.photographer_url}`);
    }
  }, [image.photographer_url]);

  return (
    <ScrollView>
      <TouchableOpacity onPress={handleOnPressPhotographer}>
        <Text style={styles.titleCard}>{image.photographer}</Text>
      </TouchableOpacity>

      <View style={styles.containerImage}>
        <Image source={{uri: image.src.large}} style={styles.image} />
        <Text style={styles.textId}>{image.id}</Text>
      </View>

      <View style={styles.containerButton}>
        <Button
          icon={<Icon name="download" type="font-awesome" color="#ffffff" />}
          title="download"
          buttonStyle={styles.buttonDonwload}
          onPress={handleOnPressBtnDownload}
        />
      </View>
    </ScrollView>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  titleCard: {
    height: 40,
    backgroundColor: 'rgba(0,0,0,1)',
    textAlign: 'center',
    paddingTop: 10,
    letterSpacing: 2,
    color: '#fff',
    textTransform: 'capitalize',
  },
  containerImage: {
    backgroundColor: 'rgba(0,0,0,1)',
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  textId: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.75)',
    color: '#fff',
    padding: 15,
  },
  containerButton: {
    height: 100,
    backgroundColor: 'rgba(0,0,0,1)',
  },
  buttonDonwload: {
    margin: 10,
    backgroundColor: 'rgb(5, 160, 129)',
  },
});
