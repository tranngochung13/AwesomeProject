import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
class ExFlatList extends Component {
  renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Image style={styles.imageThumbnail} source={{uri: item.src}} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };
  render() {
    const DATA = [
      {
        id: '1',
        title: 'Vẻ đẹp Đà Nẵng trong bộ ảnh "Dấu ấn Việt Nam"',
        src:
          'https://znews-photo.zadn.vn/w1024/Uploaded/jaroin/2017_08_21/2_1.jpg',
      },
      {
        id: '2',
        title: 'Cầu tình yêu Đà Nẵng',
        src:
          'https://danang.plus/wp-content/uploads/2019/08/cau-tinh-yeu-ban-demg.jpg',
      },
      {
        id: '3',
        title: 'Bà Nà Hills',
        src:
          'http://divui.com/blog/wp-content/uploads/2018/02/lich-trinh-du-lich-da-nang-hoi-an-3ngay-2-dem-5-634x420.jpg',
      },
      {
        id: '4',
        title: 'Cầu Vàng – Bà Nà Hills',
        src:
          'http://divui.com/blog/wp-content/uploads/2018/08/vtimes-696x398.jpg',
      },
      {
        id: '5',
        title: 'Asia Park – Sunworld Đà Nẵng Wonders',
        src:
          'http://divui.com/blog/wp-content/uploads/2018/05/kinh-nghiem-du-lich-da-nang-5-265x198.jpeg',
      },
      {
        id: '6',
        title: 'Bảo tàng 3D TrickEye',
        src:
          'http://divui.com/blog/wp-content/uploads/2018/05/kinh-nghiem-du-lich-da-nang-6-300x200.jpg',
      },
      {
        id: '7',
        title: 'Ngôi nhà úp ngược (Upside down house)',
        src:
          'http://divui.com/blog/wp-content/uploads/2018/10/nha-up-nguoc-da-nang-6-265x198.jpg',
      },
      {
        id: '8',
        title: 'Suối khoáng Thần Tài',
        src:
          'http://divui.com/blog/wp-content/uploads/2016/11/dia-diem-du-lich-da-nang-a31-696x398.jpg',
      },
    ];
    return (
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  item: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 8,
  },
  title: {
    flex: 2,
    fontSize: 32,
  },
  imageThumbnail: {
    flex: 1,
    height: 100,
    marginHorizontal: 16,
  },
});
export default ExFlatList;
