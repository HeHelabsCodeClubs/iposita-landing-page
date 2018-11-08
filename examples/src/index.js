import React from 'react';
import { render} from 'react-dom';
import IpositaLanding from '../../src';

const header = () => {
    return (
        <div>This is the header</div>
    );
}
const tableData = (
    <div>Table is here</div>
)

const App = () => (
    <IpositaLanding
    loggedIn={false}
    tableData={<tableData />}
    >
        <header />
    </IpositaLanding>
);
render(<App />, document.getElementById("root"));