import myaso from '../Assets/myaso.png';
import './recipe.css';
import RecipeCard from './way-cooking-card-Component/Way-coocing-card';
import step1 from '../Assets/step1.png';
import step2 from '../Assets/step2.png';
import step3 from '../Assets/step3.png';
import step4 from '../Assets/step4.png';
import step5 from '../Assets/step5.png';
import step6 from '../Assets/step6.png';
import step7 from '../Assets/step7.png';
import step8 from '../Assets/step8.png';

let Recipe = () => {
    return(
        <div>
            <p>Task 3</p>
            <div className='headRecipe'>
                <p>Название: Мясо по-французски со свининой</p>
                <img src={myaso} alt="" />
                <p>Ингредиенты:</p>
                <ul>
                    <li>Свиная вырезка  — 400 Грамм</li>
                    <li>Лук репчатый  — 3-4 Штук</li>
                    <li>Майонез  — 120 Миллилитров</li>
                    <li>Сыр твердый  — 80 Грамм</li>
                    <li>Соль  — 0,5 Чайных ложки</li>
                    <li>Перец душистый молотый  — По вкусу</li>
                    <li>Уксус  — 50 Миллилитров</li>
                    <li>Вода холодная  — 150 Миллилитров</li>
                </ul>
                <p>Способ приготовления:</p>
                <ul className='steps'>
                    <li>
                        <RecipeCard img={step1} text={"Подготовьте все неингредиенты. Мясо я заранее слегка подморозить и порезать тонкими пластинами (толщиной примерно 5 мм)."}/>
                    </li>
                    <li>
                        <RecipeCard img={step2} text={"Лук порежьте тонкими полукольцами."}/>
                    </li>
                    <li>
                        <RecipeCard img={step3} text={"Замаринуйте порезанный лук в водно-уксусном растворе на 15 минут."}/>
                    </li>
                    <li>
                        <RecipeCard img={step4} text={"Мясо посыпьте солью и перцем и хорошо отбейте с обеих сторон. Солить и перчить нужно именно перед отбиванием, чтобы пряности попали в средину мяса."}/>
                    </li>
                    <li>
                        <RecipeCard img={step5} text={"На дно формы для запекания положите мясо одним слоем, сверху выложите замаринованный лук (маринад предварительно нужно слить)."}/>
                    </li>
                    <li>
                        <RecipeCard img={step6} text={"Смажьте сверху майонезом и отправьте в духовку на 20 минут."}/>
                    </li>
                    <li>
                        <RecipeCard img={step7} text={"Достаньте мясо из духовки, присыпьте натертым на крупной терке твердым сыром и отправьте в духовку еще на 10-15 минут. Готовность мяса проверьте спичкой, если она хорошо входит в мясо, значит — оно готово. Как только сыр расплавится и образует аппетитную корочку, доставайте блюдо из духовки."}/>
                    </li>
                    <li>
                        <RecipeCard img={step8} text={"Готовое мясо переложите на тарелку, украсьте зеленью и подавайте к столу."}/>
                    </li>
                </ul>
                <p>Приятного аппетита!</p>
            </div>
            
        </div>
    );
}

export default Recipe;