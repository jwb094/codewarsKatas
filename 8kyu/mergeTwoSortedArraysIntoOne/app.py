#You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:

#The resulting array is sorted in ascending order.

#Any duplicate values are removed, so each integer appears only once.

#If both input arrays are empty, return an empty array.

#No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

#refactored Option
def merge_arrays(arr1, arr2):
    merged_list = arr1 + arr2
    merged_list = list(dict.fromkeys(merged_list))
    merged_list.sort()
    return merged_list