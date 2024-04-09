import React, { useEffect, useState } from 'react';
import '../History/History.css';
import { About_team, ChampionChips, Footer, TopOfHistory } from '../../Sections';
import { Championship, Header, ImagesHistory, Navbar, Video } from '../../component';
import { config } from '../../Constant/environment';
import axios from 'axios';

function History() {
  const [news,setNews]=useState()
  const [video,setVideo]=useState([])
  useEffect(() => {
    axios.get(`${config.baseUrl}/${config.newsAll}`)
    .then(res => {
      console.log(res.data.data)
      setNews(res.data.data)
    })
    .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    if (news && news.length > 0) {
      const videos = news.reduce((prev, item) => {
        if (item.videos) {
          return [...prev, ...item.videos];
        }
        return prev;
      }, []);
      setVideo(videos);
    }
  }, [news]);
  const [champion, setChampion] = useState({
    champ: '2007', image: require('../../assets/images/كأس 1.png'),
    text: 'حقق الكرامة السوري فوزا كبيرا على مضيفه السد القطري 2-صفر مساء الأربعاء ضمن الجولة الثالثة لدوري أبطال آسيا لكرة القدم، بينما تغلب القادسية الكويتي على الغرافة القطري وأصفهان الإيراني على الاتحاد السعودي والوصل الإماراتي على الكويت الكويتي. وانفرد الكرامة بصدارة المجموعة الثالثة برصيد سبع نقاط بعدما حسم مواجهته مع السد بهدفين لمحمد الحموي (70) وعاطف عبد الإله (73)'
  })
  const [active, setActive] = useState(true)

  const handleAvtive = () => {
     
    setActive(v => !v);
    setActive1(v => false);
    setActive2(v => false);
    setChampion( prev => prev = {
      champ: '2007', image: require('../../assets/images/كأس 1.png'),
      text: 'حقق الكرامة السوري فوزا كبيرا على مضيفه السد القطري 2-صفر مساء الأربعاء ضمن الجولة الثالثة لدوري أبطال آسيا لكرة القدم، بينما تغلب القادسية الكويتي على الغرافة القطري وأصفهان الإيراني على الاتحاد السعودي والوصل الإماراتي على الكويت الكويتي. وانفرد الكرامة بصدارة المجموعة الثالثة برصيد سبع نقاط بعدما حسم مواجهته مع السد بهدفين لمحمد الحموي (70) وعاطف عبد الإله (73)'
    })
  }
  
  const [active1, setActive1] = useState(false)
  const handleAvtive1 = () => {
    setActive1(v => !v);
    setActive2(v => false);
    setActive(v => false);
   setChampion(prev => prev = {
      champ: '2014', image: require('../../assets/images/كأس2.png'),
      text: 'حقق الكرامة السوري فوزا كبيرا على مضيفه السد القطري 2-صفر مساء الأربعاء ضمن الجولة الثالثة لدوري أبطال آسيا لكرة القدم، بينما تغلب القادسية الكويتي على الغرافة القطري وأصفهان الإيراني على الاتحاد السعودي والوصل الإماراتي على الكويت الكويتي. وانفرد الكرامة بصدارة المجموعة الثالثة برصيد سبع نقاط بعدما حسم مواجهته مع السد بهدفين لمحمد الحموي (70) وعاطف عبد الإله (73)'
    })
  }

  const [active2, setActive2] = useState(false)
  const handleAvtive2 = () => {
    setActive2(v => !v);
    setActive1(v => false);
    setActive(v => false);
   setChampion(prev => prev = {
      champ: '2023', image: require('../../assets/images/كأس3.png'),
      text: 'حقق الكرامة السوري فوزا كبيرا على مضيفه السد القطري 2-صفر مساء الأربعاء ضمن الجولة الثالثة لدوري أبطال آسيا لكرة القدم، بينما تغلب القادسية الكويتي على الغرافة القطري وأصفهان الإيراني على الاتحاد السعودي والوصل الإماراتي على الكويت الكويتي. وانفرد الكرامة بصدارة المجموعة الثالثة برصيد سبع نقاط بعدما حسم مواجهته مع السد بهدفين لمحمد الحموي (70) وعاطف عبد الإله (73)'
    })

  }
  return (
    <div className='History '>
      <div className='nav-his row col-12'>
        <Navbar />
      </div>
      <div className='row col-12  '>
        <TopOfHistory />
      </div>
      <div className='about-team1'>
        <div className='pb-5'>
          <Header name='تاريخ النادي' />
        </div>

        <About_team text='يعتبر الأستاذ ساطع الأتاسي مؤسس النادي ,و يعتبر ايضا الأب الروحي للنادي'
          image={require('../../assets/images/creator.png')}
          image1={require('../../assets/images/history-cham-bg.png')}
          innerhead='مؤسس نادي الكرامة'
          page='History'
          header=' '
        />
      </div>
      <div className='pb-5'>
        <Header name='البطولات' />
      </div>
      <div className='champion-chips'><ChampionChips active={active} active1={active1} active2={active2} handleAvtive={handleAvtive} handleAvtive1={handleAvtive1} handleAvtive2={handleAvtive2} /></div>
      <div className='championship'>
        <Championship
          text={champion.text}
          image={champion.image}
          champ={champion.champ}
        />
      </div>
      <div style={{marginBottom:'150px'}}><ImagesHistory news={news && news}/></div>
      <div><Video url={video[0]&&video[0].url} width={'80%'} height={'90%'}/></div>
      <div className='footer'><Footer /></div>

    </div>
  )
}

export default History