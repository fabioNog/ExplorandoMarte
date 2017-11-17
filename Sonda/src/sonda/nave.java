

package sonda;

public class nave{
    
    private int x;
    private int y;
    private String dir;
    
    //construtor sem parametros
    nave(){
        x = 0;
        y = 0;
        dir = "";
    }
    
    //construtor com parametros
    nave(int X,int Y,String DIR){
        x = X;
        y = Y;
        dir = DIR;
    }
    
    //metodos  de retorno 
    
    
    public int getX(){
        return this.x;
    }
    
    public int getY(){
        return this.y;
    }
    
    public String getDir(){
        return this.dir;
    }
    
    void setX(int X){
        this.x = X;
    }
    
    void setY(int Y){
        this.y = Y;
    }
    
    void setDir(String D){
        this.dir = D;
    }
    
}
