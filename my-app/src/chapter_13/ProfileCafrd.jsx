import Card from "./Card";

function ProfileCard(props) { 
    return (
        <Card title="Minkyoung Bae" backgroundColor="#4ea04e">
            {/* children들 */}
            <p>안녕하세요</p>
            <p>리액트 개발 중</p>
        </Card>
    );
}

export default ProfileCard;