import Pages from "./pages/index.tsx";
import { Background, Window } from "./components/index.tsx";

const App = function () {
    return (
        <>
            <Background />
            <Window>
                <Pages />
            </Window>
        </>
    );
};

export default App;
