import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
import TextField  from '@material-ui/core/TextField';
import Checkbox  from '@material-ui/core/Checkbox';

class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        Material UI
                    </Toolbar>
                </AppBar>
                <TextField placeholder="Placeholder" label="Textbox"/>
                <Checkbox value="primary" inputProps={{'aria-label':'primary checkbox'}}/>
            </div>
        )
    }
} 

export default Navbar;