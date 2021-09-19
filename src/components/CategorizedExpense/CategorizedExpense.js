import React from "react";
import './CategorizedExpense.css'
import LinearProgress from '@mui/material/LinearProgress';
import CategoryIcon1 from '@mui/icons-material/Brightness1Outlined';
import CategoryIcon2 from '@mui/icons-material/CategoryOutlined';
import CategoryIcon3 from '@mui/icons-material/FileCopyRounded';
import CategoryIcon4 from '@mui/icons-material/RecommendRounded';
import CategoryIcon from '@mui/icons-material/LocalFloristRounded';


export class CategorizedExpense extends React.Component {
    constructor(props) {
        super();
        this.linearProgressClasses = {
            colorSecondary: "#9575CD"
        };
        this.name = props.name;
        this.amount = props.amount
    }

    render() {
        return (
            <div className="categorized-expense">
                <div className="icon">
                    <CategoryIcon sx={{ fontSize: '1.5em' }} />
                </div>
                <div className="details">
                    <span> {this.name} </span>
                    <span>{this.amount}</span>
                    <span>&#x20B9;</span>
                    <LinearProgress variant="determinate"
                        value={70}
                        className="progress" />
                </div>
            </div>
        )
    }
}