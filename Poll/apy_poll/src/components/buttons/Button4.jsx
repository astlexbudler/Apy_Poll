import '../../assets/css/Button.css';

const Button = ({ 'num': num, 'selected': selected, 'setSelected': setSelected }) => {
    const handleClick = () => {
        alert(`Button ${num} clicked`);
        setSelected(num);
    };

    return (
        <button className={`button`} onClick={handleClick}>
            Button {num}
        </button>
    );
};

const Button4 = ({ 'count': count, 'selected': selected, 'setSelected': setSelected }) => {
    return (
        <>
            {[...Array(count)].map((_, i) => (
                <Button key={i} num={i} selected={selected} setSelected={setSelected} />
            ))}
        </>
    );
};

export default Button4;
