const Background = function() {

    return (
        <div 
            className="absolute h-screen w-screen top-0 left-0 z-0" 
            style={{ 
                backgroundImage: "url('/background.png')", 
                backgroundSize: "cover", filter: "blur(4px)" 
            }}
        />
    );

};

export default Background;