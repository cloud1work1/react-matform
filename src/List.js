import React , {Component} from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';

function handleClick(event) {
    event.preventDefault();
    alert('click from breadcrumb');
}

class List extends Component {
    render() {
        return (
            <div>
                <Breadcrumbs aria-label="breadcrumbs">
                    <Link color="inherit" href="/" onClick={handleClick}>Demo1</Link>
                    <Link color="inherit" href="/getting-started/installation" onClick={handleClick}>Demo2</Link>
                    <Link color="textPrimary" href="/components/bread-crumb" onClick={handleClick} aria-current="page">Demo 3</Link>
                </Breadcrumbs>
            </div>
        )
    }
}

export default List;