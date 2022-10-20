import Option from "./components/common/Option";
import OptionGroup from "./components/common/Option/OptionGroup";
import { useState } from "react";
import { Product } from "./components/pages";
const App: React.FC = () => {
    const [selected, setSelected] = useState("2");

    return (
        <main>
            <Product />
        </main>
    );
};

export default App;

/*!SECTION
<OptionGroup
                    value={selected}
                    onChange={(_, value) => setSelected(() => value)}
                >
                    <Option value={"1"} active={selected == "1"}>
                        hello
                    </Option>
                    <Option value={"2"} active={selected == "2"}>
                        hi
                    </Option>
                    <Option value={"3"} active={selected == "3"}>
                        hey
                    </Option>
                </OptionGroup>
*/
