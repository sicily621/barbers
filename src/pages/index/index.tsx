import Taro, { Component, Config } from '@tarojs/taro'
import { ScrollView,View, Text, Swiper, SwiperItem, Image} from '@tarojs/components'
import './index.scss'
import { AtTabBar, AtButton, AtIcon, AtDivider } from "taro-ui";
interface tabItem {
  title:string
  iconType:string
  text?:string
}
const tabs: Array<tabItem> = [
  { title: "首页", iconType: "iconfont icon-scissors" },
  { title: "商城", iconType: "iconfont icon-store_icon" },
  { title: "我的", iconType: "iconfont icon-wode" }
];
interface IndexState {
  current:number,
  tabs:Array<tabItem>
}
export default class Index extends Component<{},IndexState> {

  public readonly state:Readonly<IndexState> = {
    current:0,
    tabs:[...tabs]
  } 
  config: Config = {
    navigationBarTitleText: '创意美发'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  
  handleClick (value) {
     this.setState({
      current: value
    }) 
  }
  toDetail(){
    Taro.navigateTo({
      url:'/pages/reserve/index'
    })
  }
  render () {
    return (
      <ScrollView
        className='scrollview'
        scrollY
        scrollWithAnimation
      >
        <View className="index-container">
          <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
              <View>
                <Image className='swiper-image' src={ require('../../assets/images/banner1.jpg')}/>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View>
                <Image className='swiper-image' src={ require('../../assets/images/banner2.jpg') } />
              </View>
            </SwiperItem>
            <SwiperItem>
              <View>
                <Image className='swiper-image' src={ require('../../assets/images/banner3.jpg') } />
              </View>
            </SwiperItem>
            <SwiperItem>
              <View>
                <Image className='swiper-image' src={ require('../../assets/images/banner4.jpg') } />
              </View>
            </SwiperItem>
            <SwiperItem>
              <View>
                <Image className='swiper-image' src={ require('../../assets/images/banner5.jpg') } />
              </View>
            </SwiperItem>
          </Swiper>
          <View className='flex flex-align-center address'>
            <View className='flex-item'>
              <View className='title'>创意美容美发昌平店</View>
              <View className='address-detail'><AtIcon value='map-pin' className='icon-map' size='18' color='#6b6b6b'></AtIcon>北京昌平县城五街胡同</View>
            </View>
            <View className='phone-wrap flex flex-align-center flex-center'>
              <AtIcon value='iconfont icon-dadianhua' size='26' color='#c62f2f'></AtIcon>
            </View>
          </View>
          <View className='flex icon-items'>
            <View className='flex flex-column flex-item flex-align-center'>
              <AtIcon value='iconfont icon-yuyuejilu' size='30' color='#E36161'></AtIcon>
              <View>我要预约</View>
            </View>
            <View className='flex flex-column flex-item flex-align-center'>
              <AtIcon value='iconfont icon-sey-pay-b' size='30' color='#E39C61'></AtIcon>
              <View>我要买单</View>
            </View>
            <View className='flex flex-column flex-item flex-align-center'>
              <AtIcon value='iconfont icon-chongzhi' size='30' color='#E36161'></AtIcon>
              <View>充值VIP</View>
            </View>
            <View className='flex flex-column flex-item flex-align-center'>
              <AtIcon value='iconfont icon-youhuiquan' size='30' color='#CF78A9'></AtIcon>
              <View>领优惠券</View>
            </View>
          </View>
          <View className='panel-title at-row at-row__justify--between'>
            <View>作品SHOW<AtIcon value='camera' size='20' color='#c62f2f'></AtIcon></View>
            <View>
              更多
              <AtIcon value='chevron-right' size='20' color='#6b6b6b'></AtIcon>
            </View>
          </View>
          <View className='at-row at-row__align--center hair_recommend'>
            <View className='item' onClick={this.toDetail.bind(this)}>
              <Image src={ require('../../assets/images/hair8.jpg') } />
              <View className='hair-title'>
                <View>女士烫发</View>
                <View><AtIcon value='heart-2' size='16' className='icon' color='#c62f2f'></AtIcon>2</View>
              </View>
            </View>
            <View className='item'>
              <Image src={require('../../assets/images/hair1.jpg')} />
              <View className='hair-title'>
                <View>公主头编发</View> 
                <View><AtIcon value='heart-2' size='16' className='icon' color='#c62f2f'></AtIcon>1</View>
              </View>
            </View>
            <View className='item'>
              <Image src={ require('../../assets/images/hair3.jpg') } />
              <View className='hair-title'>
                <View>男士理发</View>
                <View><AtIcon value='heart' size='16' className='icon' color='#c62f2f'></AtIcon>0</View>
              </View>
            </View>
          </View>
          <View className='at-row at-row__align--center hair_recommend'>
            <View className='item'>
              <Image src={ require('../../assets/images/hair4.jpg') } />
              <View className='hair-title'>
                <View>淑女头编发</View>
                <View><AtIcon value='heart' size='16' className='icon' color='#c62f2f'></AtIcon>0</View>
              </View>
            </View>
            <View className='item'>
              <Image src={ require('../../assets/images/hair5.jpg') } />
              <View className='hair-title'>
                <View>男士烫发</View>
                <View><AtIcon value='heart' size='16' className='icon' color='#c62f2f'></AtIcon>0</View>
              </View>
            </View>
            <View className='item'>
              <Image src={ require('../../assets/images/hair6.jpg') } />
              <View className='hair-title'>
                <View>公主烫</View> 
                <View><AtIcon value='heart' size='16' className='icon' color='#c62f2f'></AtIcon>0</View>
              </View>
            </View>
          </View>
          <View className='at-row at-row__align--center hair_recommend'>
            <View className='item'>
              <Image src={ require('../../assets/images/hair7.jpg') } />
              <View className='hair-title'>
                <View>洗剪吹</View>
                <View><AtIcon value='heart' size='16' className='icon' color='#c62f2f'></AtIcon>0</View>
              </View>
            </View>
            <View className='item'>
              <Image src={ require('../../assets/images/hair2.jpg') } />
              <View className='hair-title'>
                <View>男士理发</View>
                <View><AtIcon value='heart' size='16' className='icon' color='#c62f2f'></AtIcon>0</View>
              </View>
            </View>
          </View>
          <AtTabBar
            fixed
            color='#6b6b6b'
            tabList={this.state.tabs}
            onClick={this.handleClick.bind(this)}
            current={this.state.current}
          />
        </View>
      </ScrollView>
    );
  }
}
