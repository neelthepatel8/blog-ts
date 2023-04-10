interface BodyContainerProps {
  children: React.ReactNode;
}


const BodyContainer: React.FC<BodyContainerProps> = ({ children }) => {
    return ( 
        <div className="pt-40 place-content-center">
            {children}
        </div>
     );
}
 
export default BodyContainer;