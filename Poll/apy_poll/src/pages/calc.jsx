import { Button1, Button2 } from '../components/Buttons.jsx';

function CheckPage({ 'selected': selected }) {

    return (
        <>
            <Button1 buttonText="Go To MainPage" />
            <Button2 buttonText="Go To CheckPage" />
            <div>
                <h1>
                    당신은 메인 페이지에서 {selected} 버튼을 눌렀습니다.
                </h1>
            </div>
        </>
    );
}

export default CheckPage;
