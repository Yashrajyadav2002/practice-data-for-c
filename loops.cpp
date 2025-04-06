#include<iostream>
using namespace std;

//while loop?
int main(){
    int num;
    cout<<"enter the number";
    cin>>num;

    while (num<=10){
        cout<<num<<endl;
        num++;
    }
    return 0;


}

// for loop concept ?

int main(){
     for(int a=1;a<=10;a++){
        cout<<a<<"\t";
     }
     return 0;


do while loop concept ?

int main(){
    int a=1;
    do{
        cout<<a<<"\t";
        a++;
    }
    while (a<=10);
        
    
}

// wap to reverse a given number ?

int main(){
    int num;
    cout<<"enter number";
    cin>>num;
    int rev=0;

    while (num>0){
        int digit=num%10;
        cout<<digit;
        rev=rev*10+digit;
        num=num/10;

    }
    return 0;
}


//chek the number is palindrome or not ?

int main(){
    int num;
    int num1;
    int num2=0;
    
    cout<<"enter the num";
    cin>>num;
    while(num>0){
        int num1=num%10;
        num=num/10;
        num2=num1+num2;
    }
    cout<<num2;    
     
    
    return 0;

}

//sum of all digit num?
int main(){
    int num;
    int sum=0;
    
    cout<<"enter num";
    cin>>num;

    for(int i=1;i<=num;i++){
        sum=sum+i;
        
    }
   
   cout<<sum;

   return 0;

}

