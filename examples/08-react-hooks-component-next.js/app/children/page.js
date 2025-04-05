import { UserInfo } from "./UserInfo";
import { Welcome } from "./Welcome";

export default function WelcomePage() {
    // jsx
    return <>
            <Welcome appName='Example explaining Children property' year='2025' >
                <p> I am a child of Welcome </p>
            </Welcome>
            <UserInfo firstName='Fatima' lastName = 'Ali' />
        </>
}