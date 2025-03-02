import { Button1, ButtonMUI, Button4 } from '../components/Buttons.jsx';

function MainPage({ 'selected': selected, 'setSelected': setSelected }) {

    return (
        <>
            <div>
                <ButtonMUI></ButtonMUI>
                <Button4 count={10} selected={selected} setSelected={setSelected} />
            </div>
            <h1>
                당신은 메인 페이지입니다.
            </h1>
        </>
    );
}

export default MainPage;
