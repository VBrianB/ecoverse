import Image from 'next/image'
import style from './mainContent.module.css'
import MainImageLeft from '../../../../../public/image/main-image.jpg'
import Recycle from '../../../../../public/image/recycle.png'
import Next from '../../../../../public/image/next.png'
import Cadeira from '../../../../../public/image/cadeira.png'
import StartStage from '../../../../../public/image/stage1.jpg'
import Dirt from '../../../../../public/image/dirt.png'
import Trash from '../../../../../public/image/trash.png'

const MainContent = () => {
    return(
        <div className={style.containerMainContent}>
            <div className={style.content}>
                <Image src={Dirt} className={style.dirt} alt='image'/>
                <Image src={StartStage} alt='Garrafas de plástico' className={style.mainLeftImage}/>
                <span className={style.copyMainLeft}>Transformamos plástico descartado em móveis inovadores, unindo design, funcionalidade e sustentabilidade. 
                    Escolha um futuro mais verde com peças únicas e conscientes!
                </span>
            </div>
            <div className={`${style.content} ${style.copyMain}`} style={{alignItems: 'flex-start'}}>
                <span className={style.copyMainOne}>Design Sustentável</span>
                <span className={style.copyMainTwo}>Com Plástico</span>
                <span className={style.copyMainThree}>Reciclado</span>
            </div>
            <div className={style.content} >
                <div className={style.cycleLine}>
                    <div className={style.cycle}><Image src={MainImageLeft} alt='image'/></div>
                    <Image src={Next} className={style.next} alt='image'/>
                    <div className={style.cycle}><Image src={Recycle} alt='image'/></div>
                    <Image src={Next} className={style.next} alt='image'/>
                    <div className={style.cycle}><Image src={Cadeira} alt='image'/></div>
                </div>
                <div className={style.containerFinalStage}>
                    <Image src={Cadeira} className={style.finalCycle} alt='image'/>
                    <Image src={Trash} className={style.trash} alt='image'/>
                </div>
            </div>
           
        </div>
    )
}

export default MainContent