    
package Modelos;
import java.awt.*;
import java.util.ArrayList;
import javax.swing.JPanel;

public class Painel extends JPanel {
    
    ArrayList v;
    
    public Painel(ArrayList v){
        this.v = v;
    }
    
    public void paint(Graphics g){
        Desenhar d;
        for(int i=0;i<v.size();i++){
            d = (Desenhar)v.get(i);
            d.Desenhar(g);
        }
        
        
    }
}
