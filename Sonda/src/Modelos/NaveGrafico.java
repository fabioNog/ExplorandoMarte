/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelos;

import java.awt.*;



/**
 *
 * @author fabio
 */
public class NaveGrafico extends Nave implements Desenhar{

    Color color;
     
    public NaveGrafico(Coordenada a, Coordenada b,Coordenada c,Color uncolor){
        super(a,b,c);
        this.color = uncolor;
     } 
     
    @Override
    public void Desenhar(Graphics dw) {
        int X[] = {(int)this.getX(),(int)this.C1.getX(),(int)this.C2.getX()};
        int Y[] = {(int)this.getY(),(int)this.C1.getY(),(int)this.C2.getY()};
        Polygon p = new Polygon(X,Y,3);
        dw.fillPolygon(p);
    }
    
    
    
}
