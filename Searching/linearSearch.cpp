#include <iostream>
#include <vector>
#include <string>
using namespace std;

void input(vector<int> &arr)
{
  int inp;
  cout << "Enter the elements (-1 to stop): ";
  while (true)
  {
    cin >> inp;
    if (inp == -1)
    {
      break;
    }
    arr.push_back(inp);
  }
}

void print(vector<int> &arr)
{
  cout << "Printing the elements : " << endl;
  for (int i = 0; i < arr.size(); i++)
  {
    cout << arr[i] << " ";
  }
  cout << endl;
}

int linearSearch(vector<int> arr, int target)
{
  int location = -1;
  for (int i = 0; i < arr.size(); i++)
  {
    if (arr[i] == target)
    {
      location = i;
      break;
    }
  }
  return location;
}

int binarySearch(vector<int> arr, int target)
{
  int start = 0;
  int end = arr.size() - 1;
  while (start <= end)
  {
    int mid = start + (end - start) / 2;
    if (arr[mid] == target)
    {
      return mid;
    }
    else if (target < mid)
    {
      end = mid - 1;
    }
    else
    {
      start = mid + 1;
    }
  }

  return -1;
}

int main()
{
  vector<int> arr;
  int target = -1;
  input(arr);
  print(arr);
  cout << "Enter the value which you want to find : ";
  cin >> target;
  int result = binarySearch(arr, target);
  if (result != -1)
  {
    cout << "Element are found at location : " << result + 1 << endl;
  }
  else
  {
    cout << "Element not found" << endl;
  }
}