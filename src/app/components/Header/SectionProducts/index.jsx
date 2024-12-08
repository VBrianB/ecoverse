import Image from 'next/image';
import style from './sectionProducts.module.css';
import BrickImage from '../../../../../public/image/Tijolo.jpg';
import ChairImage from '../../../../../public/image/cadeira.png';
import Mapa from '../../../../../public/image/mapa.png';

const ProductSection = () => {
    return (
        <section className={style.productSection}>
            <div className={style.productContent}>
                <h2 className={style.title}>Nossos Produtos</h2>
                <p className={style.description}>
                    Conheça os produtos inovadores criados a partir de plástico reciclado. Nossa missão é combinar sustentabilidade com funcionalidade, criando soluções incríveis para o futuro.
                </p>
                <div className={style.products}>
                    <div className={style.product}>
                        <div className={style.productImage}>
                            <Image src={BrickImage} alt="Tijolo de plástico reciclado" />
                        </div>
                        <div className={style.productInfo}>
                            <h3 className={style.productTitle}>Tijolo Sustentável</h3>
                            <p className={style.productDescription}>
                                Tijolos feitos com plástico reciclado, oferecendo resistência, durabilidade e uma solução ecológica para a construção civil.
                            </p>
                        </div>
                    </div>
                    <div className={style.product}>
                        <div className={style.productImage}>
                            <Image src={ChairImage} alt="Cadeira de plástico reciclado" />
                        </div>
                        <div className={style.productInfo}>
                            <h3 className={style.productTitle}>Cadeira Reciclada</h3>
                            <p className={style.productDescription}>
                                Cadeiras modernas e ergonômicas, criadas a partir de materiais reciclados, unindo design e sustentabilidade.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.benefitsSection}>
                <h2 className={style.benefitsTitle}>Benefícios da Reciclagem</h2>
                <div className={style.benefits}>
                    <div className={style.benefit}>
                        <h3 className={style.benefitTitle}>Redução de Resíduos</h3>
                        <p className={style.benefitPercentage}>50%</p>
                        <p className={style.benefitDescription}>
                            A reciclagem reduz metade dos resíduos enviados para aterros sanitários, contribuindo para um planeta mais limpo.
                        </p>
                    </div>
                    <div className={style.benefit}>
                        <h3 className={style.benefitTitle}>Economia de Energia</h3>
                        <p className={style.benefitPercentage}>30%</p>
                        <p className={style.benefitDescription}>
                            Processos de reciclagem podem economizar até 30% de energia comparado com a produção de novos materiais.
                        </p>
                    </div>
                    <div className={style.benefit}>
                        <h3 className={style.benefitTitle}>Redução de Emissões</h3>
                        <p className={style.benefitPercentage}>20%</p>
                        <p className={style.benefitDescription}>
                            A reciclagem ajuda a reduzir até 20% das emissões de CO2 em comparação com a produção de produtos a partir de materiais virgens.
                        </p>
                    </div>
                </div>
            </div>

            <div className={style.countriesSection}>
            <h2 className={style.countriesTitle}>Países que Implementam a Reciclagem</h2>
            <p className={style.countriesDescription}>
                Conheça os países que já estão criando produtos inovadores a partir da reciclagem de plásticos, promovendo
                sustentabilidade e redução de resíduos.
            </p>
                <div className={style.countriesContent}>
                    <div className={style.countriesMap}>
                        <Image src={Mapa} alt='image'/>
                    </div>
                    <div className={style.countriesInfo}>
                        <div className={style.country}>
                            <h3 className={style.countryTitle}>Alemanha</h3>
                            <p className={style.countryDetails}>
                                A Alemanha é um dos países líderes em reciclagem, com mais de 50% de seus resíduos sendo reciclados,
                                além de utilizar plásticos reciclados na fabricação de móveis e materiais de construção.
                            </p>
                            <div className={style.countryStats}>
                                <span className={style.countryStat}>50%</span>
                                <span className={style.countryStat}>Reciclagem de resíduos</span>
                            </div>
                        </div>
                        <div className={style.country}>
                            <h3 className={style.countryTitle}>Países Baixos</h3>
                            <p className={style.countryDetails}>
                                Os Países Baixos estão na vanguarda da economia circular, com 70% dos plásticos reciclados sendo
                                transformados em novos produtos, como móveis e utensílios.
                            </p>
                            <div className={style.countryStats}>
                                <span className={style.countryStat}>70%</span>
                                <span className={style.countryStat}>Plástico reciclado</span>
                            </div>
                        </div>
                        <div className={style.country}>
                            <h3 className={style.countryTitle}>Japão</h3>
                            <p className={style.countryDetails}>
                                O Japão possui um sistema altamente eficiente de reciclagem, reutilizando 80% do plástico para a
                                criação de novos produtos e energias renováveis.
                            </p>
                            <div className={style.countryStats}>
                                <span className={style.countryStat}>80%</span>
                                <span className={style.countryStat}>Reciclagem de plástico</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.contactSection}>
                <h2 className={style.contactTitle}>Entre em Contato</h2>
                <p className={style.contactDescription}>
                    Tem dúvidas ou sugestões? Entre em contato conosco para saber mais sobre nossos produtos e como podemos
                    ajudar a transformar seu projeto com soluções sustentáveis.
                </p>
                <form className={style.contactForm}>
                    <input
                        type="text"
                        placeholder="Seu Nome"
                        className={style.contactInput}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Seu E-mail"
                        className={style.contactInput}
                        required
                    />
                    <textarea
                        placeholder="Sua Mensagem"
                        className={style.contactTextArea}
                        rows="6"
                        required
                    ></textarea>
                    <button type="submit" className={style.contactButton}>
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ProductSection;
