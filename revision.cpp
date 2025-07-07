#include<iostream>
using namespace std;
int main(){
    
//     for(int a=1;(a<=20);a++){
//     cout<<a<<"\t";
//   }
//   return 0;
// }

//wap to reverse number ex=1234;?

// int num;
// cout<<"enter the number";
// cin>>num;
// int rev=0;

// while(num>0){
//     int digit=num%10;
//     cout<<digit;
//     rev=rev*10+digit;
//     num=num/10;

// }
// return 0;

// }

//sum of digit in a number ex=156 ?

// int n;
// cout<<"enter the num";
// cin>>n;
// for(int num=0;(num<n);num++){
//     if(num%3==0&&num%5==0)
//     cout<< num <<"";
// }
// return 0;
// }

int num;
cout<<"enter num";
cin>>num;
int sum=0;
for(int i=1;(i<=num);i++){
    sum+=i*i;
}
cout<<sum;
}



