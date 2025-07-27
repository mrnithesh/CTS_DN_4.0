import '../Stylesheets/mystylesheet.css';

const percenttoDecimal = (decimal) => {
    return (decimal.toFixed(2) +"%");
}

const CalcScore = (total,goal) => {
    return percenttoDecimal(total/goal);
};

export const CalculateScore = ({Name, School,Total, Goal}) => {
    return(
    <div className ='formatstyle'>
        <h1><font color='Brown'> Student Details:</font></h1>
        <div className='Name'>
            <b><span>Name:</span><span>{Name}</span></b>
        </div>
        <div className='School'>
            <b><span>School:</span></b><span>{School}</span>
        </div>
        <div className='Total'>
            <b><span>Total:</span></b><span>{Total}</span>
        </div>
        <div className='Goal'>
            <b><span>Goal:</span></b><span>{Goal}</span>
        </div>
        <div className='Score'>
            <b><span>Score:</span></b><span>{CalcScore(Total, Goal)}</span>
        </div>
    </div>
    );
};
