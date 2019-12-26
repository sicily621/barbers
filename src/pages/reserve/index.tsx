import Taro, { Component, Config } from '@tarojs/taro'
import { ScrollView,View,Image,Swiper, SwiperItem} from '@tarojs/components';
import './index.scss';
import { AtButton, AtIcon, AtAvatar } from "taro-ui";
interface tabItem {
  title:string
  iconType:string
  text?:string
}
const tabs: Array<tabItem> = [
  { title: "首页", iconType: "iconfont icon-scissors" },
  { title: "SHOW", iconType: "iconfont icon-star2" },
  { title: "我的", iconType: "iconfont icon-wode" }
];
interface IndexState {
  current:number,
  tabs:Array<tabItem>
}
export default class Index extends Component<{}, IndexState> {
    public readonly state: Readonly<IndexState> = {
        current: 0,
        tabs: [...tabs]
    }
    config: Config = {
        navigationBarTitleText: '发型详情'
    }
    handleClick (value) {
        this.setState({
            current: value
        }) 
    }
    render(){
        return(
            <ScrollView
                className='scrollview'
                scrollY
                scrollWithAnimation>
                    <View className="index-container">
                            <Swiper
                                className='swiper'
                                indicatorColor='#999'
                                indicatorActiveColor='#333'
                                circular
                                indicatorDots
                                autoplay>
                                    <SwiperItem>
                                        <View>
                                            <Image className='swiper-image' src={ require('../../assets/images/hair8.jpg') } />
                                        </View>
                                    </SwiperItem>
                            </Swiper> 
                            <View className='white-bg'>
                                <View className='flex flex-between price-line'>
                                    <View className='flex flex-align-center'>
                                        ¥<View className='price'>160.01</View>起<View className='oldPrice'>199</View>
                                    </View>
                                    <View className='right'>已拼3934次</View>
                                </View>
                                <View className='flex flex-align-center hair-info'>
                                    <View className='red'>
                                        <AtIcon value='iconfont icon-zan' className='icon' size='18' color='#fff'></AtIcon>
                                        小编推荐
                                    </View>
                                    <View className='title'>
                                        女士时尚烫+漂染
                                    </View>
                                </View>
                                <View className='flex action-line flex-align-center'>
                                    <View className='red'>店庆</View>
                                    <View>
                                        此商品参加年货节狂欢中，每满100可用5个红包
                                        <AtIcon value='iconfont icon-hongbao-' className='icon' size='18'></AtIcon>
                                    </View>
                                </View>
                                <View className='flex flex-align-center hair-info flex-between'>
                                    <View className='flex flex-align-center'>
                                        <View className='red'>返现</View>
                                        <View className='font-sm'>店铺内拼满68返5元</View> 
                                    </View>
                                    <AtIcon value='chevron-right' size='20' color='#999'></AtIcon>
                                </View>
                                <View className='flex flex-align-center hair-info flex-between'>
                                    <View className='font-sm'>急速退款 · 全场8折 · 七天无理由退货 · 48小时发货</View>
                                    <AtIcon value='chevron-right' size='20' color='#999'></AtIcon>
                                </View>
                                <View className='top-line flex flex-between'>
                                    <View className='flex'>
                                        <AtIcon value='iconfont icon-paiming' className='red icon' size='20'></AtIcon>
                                        [女士烫染好评榜]第<View className='red'>1</View>名
                                    </View>
                                    <AtIcon value='chevron-right' size='20' color='#999'></AtIcon>
                                </View>
                            </View>
                            <View className='white-bg mt10 order-list'>
                                <View className='flex flex-between'>
                                    <View className='black'>这些人刚刚购买成功，可参与拼单</View>
                                    <View>
                                        查看全部
                                        <AtIcon value='chevron-right' size='20' color='#999'></AtIcon>
                                    </View>
                                </View>
                                <View className='flex flex-between flex-align-center user-list'>
                                    <View className='flex black icon-wrap'>
                                        <AtAvatar size='small' className='icon' circle image={ require('../../assets/images/hair8.jpg') }></AtAvatar>
                                        <AtAvatar size='small' className='icon'  circle image={ require('../../assets/images/hair6.jpg') }></AtAvatar>
                                        <View className='name'>becky、marry</View>
                                    </View>
                                    <View>
                                        <AtButton type="primary" className='btn'>去拼单</AtButton>
                                    </View>
                                </View>
                            </View>
                            <View className='white-bg mt10 order-list'>
                                <View className='flex flex-between'>
                                    <View className='black'>商品评价(21)</View>
                                    <View>
                                        查看全部
                                        <AtIcon value='iconfont chevron-right' size='20' color='#999'></AtIcon>
                                    </View>
                                </View>
                                <View className='tag-line flex'>
                                    <View className='flex green'>
                                        <AtIcon value='iconfont icon-anquan' size='20'></AtIcon>正品药水(20)
                                    </View>
                                    <View className='red'>
                                        造型时尚(123)
                                    </View>
                                </View>
                                <View className='flex'>
                                    <AtAvatar size='small' className='avatar' circle image={ require('../../assets/images/hair8.jpg') }></AtAvatar>
                                    sicily
                                </View>
                                <View>
                                    这个发型太时尚了，颜色也很好，尤其在室外太阳光一照更好看了，我太喜欢了，I Love it❤!!!
                                </View>
                                <View className='flex'>
                                    <AtAvatar size='small' className='avatar' circle image={ require('../../assets/images/hair6.jpg') }></AtAvatar>
                                    becky
                                </View>
                                <View>
                                    这个发型太酷了，回头率很高，我太喜欢了，开心开心开心!!!
                                </View>
                            </View>
                            <View className='btn-line flex lex-align-center'>
                                <View className='flex-item flex-align-center flex flex-column flex-center'>
                                    <View>收藏<AtIcon value='heart-2' size='20' className='red'></AtIcon>(1213)</View>
                                </View>
                                <AtButton type="primary" className='btn'>
                                     <View>¥180.1</View> <View>预约同款</View>
                                </AtButton>
                                <AtButton type="primary" className='btn secondary'>
                                    <View>¥160.1</View> <View>发起拼单</View>
                                </AtButton>
                            </View>
                    </View>
            </ScrollView>
        )
    }
}