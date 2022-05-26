import { render } from "@testing-library/react";

let Profile = () => {
    return (
        <div>
            <p>Task 1</p>
            <p>Фамимлия: Симпсон</p>
            <p>Имя: Гомер</p>
            <p>Отчество: Джей</p>
            <p>Телефон: 555-55-55</p>
            <p>Email: simpson@gmail.com</p>
        </div>
    );
}

export default Profile;