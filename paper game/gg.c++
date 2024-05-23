#include <iostream>
#include <algorithm>

using namespace std;

string removeStars(string s) {
        string tmp = "";
        int count = 0;
        
        int size = s.length() - 1;
        
        while(size >= 0) {
            if(s[size] == '*') {
                count++;
            } else {
                if(count == 0) {
                    tmp += s[size];
                } else {
                    count--;
                }
            }
            size--;
        }
        reverse(tmp.begin(), tmp.end());
        return tmp;
    }
int main()
{
    cout<<removeStars("leet**cod*e");

    return 0;
}