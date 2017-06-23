var Image = React.createClass(
    {
        changeImage: function() {
            this.setState({
                hinh: (this.state.hinh % 4)+1
            });
        },
        getInitialState: function(){
            return{
                hinh: 1
            }
        },
        render: function(){
            return(
                <img src={ "images/" + this.state.hinh + ".jpg"} />
            )
        },
        componentDidMount: function() {
            setInterval(this.changeImage, 3000);
        }
    }
);

ReactDOM.render(
    <Image/>,
    document.getElementById('root')
);