// // import java.util.*;

// // public class Solution {
// //     static int[] heights = {10, 20, 30, 10};  // Your array as class field

// //     public static int frog(int n) {  // n = heights.length - 1 (last index)
// //         int [] dp=new int[heights.length];
// //         dp[0]= 0;   // Cost to reach start: 0
// //         dp[1]= Math.abs(heights[1] - heights[0]);
// //        for(int i=2;i<=heights.length-1;i++){
// //         int left =dp[i-1]+Math.abs(heights[i] - heights[i - 1]);//math.abs for negative values it can convert to positive
// //         int right =dp[i-2]+ Math.abs(heights[i] - heights[i - 2]);

// //          dp[n]= Math.min(left, right);
// //        }
// //          return dp[n];
        

// //     }

// //     public static void main(String[] args) {
// //         int n = heights.length - 1;  // 3
// //         System.out.println(frog(n)); // 20: path 0→1 (10), 1→3 (10)
// //     }
// // }

// // public class Solution{
// //    public static void main(String[] args) {
    
// //    }
// //    public static int fump(int n){
// //     if(n==0) return 0;
   
// //    for(int i=1;i<=n;i++){
// //     int minijump=fump(n-i)+Math.abs(heights[i]-heights[i-i]);
// //    }
// // }

// // import java.util.*;
// // class Solution {
// //     static List<List<Integer>> result=new ArrayList<>();
// //     public List<List<Integer>> combinationSum3(int k, int n) {
// //          backtracking(new ArrayList<>(),k,1,n);
// //          return result;
// //     }
// //     public static void backtracking(List<Integer> path,int k,int index,int target){
// //      if(target==0 && path.size()==k){
// //         result.add(new ArrayList<>(path));
// //         return;
// //      }
// //       if(target<0 || path.size()>k){
// //             return;
// //         }
// //      for(int i=index;i<=9;i++){
       
// //             path.add(i);
// //             backtracking(path,k,i+1,target-i);
// //             path.remove(path.size()-1);
// //         }
// //     }
// //     public static void main(String[] args) {
// //       Solution s=new Solution();
// //       System.out.println(s.combinationSum3(3, 7));
// //     }
// // }
// // public class Solution {
// //     public static int maxSum(int[] nums) {
// //         int n = nums.length;
// //         if (n == 0) return 0;
// //         if (n == 1) return nums[0];

// //         int prev2 = 0;  // dp[i-2]
// //         int prev1 = nums[0];  // dp[i-1]

// //         for (int i = 1; i < n; i++) {
// //             int take = nums[i] + prev2;
// //             int notTake = prev1;
// //             int curr = Math.max(take, notTake);
// //             prev2 = prev1;
// //             prev1 = curr;
// //         }
// //         return prev1;
// //     }

// //     public static void main(String[] args) {
// //         int[] arr = {2, 1, 4, 9};
// //         System.out.println(maxSum(arr));  // Output: 11 (4+9 or 2+9)
// //     }
// // }
// // import java.util.Arrays;

// // public class MinNonAdjacentSum {
    
// //     public static int minSumNonAdjacent(int[] arr) {
// //         int n = arr.length;
// //         if (n == 0) return 0;
// //         if (n == 1) return arr[0];
// //         if (n == 2) return Math.min(arr[0], arr[1]);

// //         int[] dp = new int[n];
// //         dp[0] = arr[0];
// //         dp[1] = Math.min(arr[0], arr[1]);

// //         for (int i = 2; i < n; i++) {
// //             dp[i] = Math.min(dp[i-1], dp[i-2] + arr[i]);
// //         }
// //         return dp[n-1];
// //     }

// //     // Space Optimized Version (O(1) space)
// //     public static int Solution(int[] arr) {
// //         int n = arr.length;
// //         if (n == 0) return 0;
// //         if (n == 1) return arr[0];
// //         if (n == 2) return Math.min(arr[0], arr[1]);

// //         int prev2 = arr[0];      // dp[i-2]
// //         int prev1 = Math.min(arr[0], arr[1]);  // dp[i-1]

// //         for (int i = 2; i < n; i++) {
// //             int temp = Math.min(prev1, prev2 + arr[i]);
// //             prev2 = prev1;
// //             prev1 = temp;
// //         }
// //         return prev1;
// //     }

// //     public static void main(String[] args) {
// //         // Test Case 1: From your image logic
// //         int[] arr1 = {2, 1, 4, 9};
// //         System.out.println("Array: " + Arrays.toString(arr1));
// //         System.out.println("Min Sum (DP Array): " + minSumNonAdjacent(arr1));
// //         System.out.println("Min Sum (Optimized): " + Solution(arr1));
// //         System.out.println();

// //         // Test Case 2: [4,1,3,2,5]
// //         int[] arr2 = {4, 1, 3, 2, 5};
// //         System.out.println("Array: " + Arrays.toString(arr2));
// //         System.out.println("Min Sum (DP Array): " + minSumNonAdjacent(arr2));
// //         System.out.println("Min Sum (Optimized): " + Solution(arr2));
// //         System.out.println();

// //         // Test Case 3: Edge cases
// //         int[] arr3 = {5};
// //         int[] arr4 = {1, 2};
// //         int[] arr5 = {};
        
// //         System.out.println("Single element: " + Arrays.toString(arr3) + " -> " + minSumNonAdjacent(arr3));
// //         System.out.println("Two elements: " + Arrays.toString(arr4) + " -> " + minSumNonAdjacent(arr4));
// //         System.out.println("Empty array: [] -> " + minSumNonAdjacent(arr5));
// //     }
// // }
    
//     // 1. RECURSIVE
//     public static int minSumRecursive(int[] arr, int i) {
//         if (i >= arr.length) return 0;
//         int skip = minSumRecursive(arr, i + 1);
//         int take = arr[i] + minSumRecursive(arr, i + 2);
//         return Math.min(skip, take);
//     }
    
//     // 2. MEMOIZATION
//     public static int minSumMemo(int[] arr) {
//         Integer[] dp = new Integer[arr.length];
//         return minSumMemoHelper(arr, 0, dp);
//     }
//     private static int minSumMemoHelper(int[] arr, int i, Integer[] dp) {
//         if (i >= arr.length) return 0;
//         if (dp[i] != null) return dp[i];
//         int skip = minSumMemoHelper(arr, i + 1, dp);
//         int take = arr[i] + minSumMemoHelper(arr, i + 2, dp);
//         return dp[i] = Math.min(skip, take);
//     }
    
//     // 3. TABULATION
//     public static int minSumTabulation(int[] arr) {
//         int n = arr.length;
//         if (n == 0) return 0;
//         if (n == 1) return arr[0];
//         int[] dp = new int[n];
//         dp[0] = arr[0];
//         dp[1] = Math.min(arr[0], arr[1]);
//         for (int i = 2; i < n; i++) {
//             dp[i] = Math.min(dp[i-1], dp[i-2] + arr[i]);
//         }
//         return dp[n-1];
//     }
    
//     // 4. SPACE OPTIMIZED
//     public static int minSumOptimized(int[] arr) {
//         int n = arr.length;
//         if (n == 0) return 0;
//         if (n == 1) return arr[0];
//         int prev2 = arr[0];
//         int prev1 = Math.min(arr[0], arr[1]);
//         for (int i = 2; i < n; i++) {
//             int curr = Math.min(prev1, prev2 + arr[i]);
//             prev2 = prev1;
//             prev1 = curr;
//         }
//         return prev1;
//     }
// // n=4 arr={1,2,3,4}pref2=0 and pref=1
// // for i=2 curr=math.min(pref1,pref2+arr[i]) => (pref1,arr[0]+arr[2])=>(1,1+3)=>1  pref2=pref1 ,pref1=curr
// // for i=3 curr=math.min(pref1,pref2+arr[i]) => (pref1,pref1+arr[3])=>(1,1+4)=>1  pref2=pref1 ,pref1=curr
// // return pref1=1 final ans
// // 
    
//     public static void main(String[] args) {
//         int[] arr = {2, 1, 4, 9};
//         System.out.println("Array: " + Arrays.toString(arr));
        
//         System.out.println("Recursive: " + minSumRecursive(arr, 0));
//         System.out.println("Memoization: " + minSumMemo(arr));
//         System.out.println("Tabulation: " + minSumTabulation(arr));
//         System.out.println("Optimized: " + minSumOptimized(arr));
//     }
// }
import java.util.*;

class RBNode {
    int key;
    String color;
    RBNode left, right, parent;
    
    RBNode(int key) {
        this.key = key;
        this.color = "RED";
        left = right = parent = null;
    }
}

class RedBlackTree {
    RBNode root;
    static int leftRotations = 0;
    static int rightRotations = 0;
    
    // Temporary reference to the newly inserted node for fixup
    private RBNode newNodeReference;

    String getColor(RBNode node) {
        return (node == null) ? "BLACK" : node.color;
    }
    
    void setColor(RBNode node, String color) {
        if (node != null) node.color = color;
    }
    
    RBNode getParent(RBNode node) {
        return (node != null) ? node.parent : null;
    }
    
    RBNode getGrandparent(RBNode node) {
        RBNode parent = getParent(node);
        return (parent != null) ? parent.parent : null;
    }
    
    RBNode getUncle(RBNode node) {
        RBNode parent = getParent(node);
        RBNode grand = getGrandparent(node);
        if (parent != null && grand != null) {
            return (parent == grand.left) ? grand.right : grand.left;
        }
        return null;
    }
    
    int height(RBNode node) {
        return (node == null) ? 0 : 1 + Math.max(height(node.left), height(node.right));
    }
    
    RBNode rightRotate(RBNode y) {
        rightRotations++;  
        RBNode x = y.left;
        RBNode T2 = x.right;
        
        x.right = y;
        y.left = T2;
        if (T2 != null) T2.parent = y;
        
        x.parent = y.parent;
        y.parent = x;
        
        if (x.parent != null) {
            if (y == x.parent.left) x.parent.left = x;
            else x.parent.right = x;
        } else {
            root = x;
        }
        return x;
    }
    
    RBNode leftRotate(RBNode x) {
        leftRotations++;   
        RBNode y = x.right;
        RBNode T2 = y.left;
        
        y.left = x;
        x.right = T2;
        if (T2 != null) T2.parent = x;
        
        y.parent = x.parent;
        x.parent = y;
        
        if (y.parent != null) {
            if (x == y.parent.left) y.parent.left = y;
            else y.parent.right = y;
        } else {
            root = y;
        }
        return y;
    }
    
    void insertFixup(RBNode z) {
        // Condition: While parent is RED, we have a violation
        while (getParent(z) != null && getParent(z).color.equals("RED")) {
            RBNode parent = getParent(z);
            RBNode gparent = getGrandparent(z);
            RBNode uncle = getUncle(z);
            
            if (parent == gparent.left) {
                if (getColor(uncle).equals("RED")) {
                    // Case 1: Uncle is RED (Recolor)
                    setColor(parent, "BLACK");
                    setColor(uncle, "BLACK");
                    setColor(gparent, "RED");
                    z = gparent;
                } else {
                    if (z == parent.right) {
                        // Case 2: Uncle is BLACK, z is right child (Left Rotate)
                        z = parent;
                        leftRotate(z);
                        parent = getParent(z); // Update parent after rotation
                        gparent = getGrandparent(z);
                    }
                    // Case 3: Uncle is BLACK, z is left child (Right Rotate)
                    setColor(parent, "BLACK");
                    setColor(gparent, "RED");
                    rightRotate(gparent);
                }
            } else {
                if (getColor(uncle).equals("RED")) {
                    // Case 1: Uncle is RED (Recolor)
                    setColor(parent, "BLACK");
                    setColor(uncle, "BLACK");
                    setColor(gparent, "RED");
                    z = gparent;
                } else {
                    if (z == parent.left) {
                        // Case 2: Uncle is BLACK, z is left child (Right Rotate)
                        z = parent;
                        rightRotate(z);
                        parent = getParent(z);
                        gparent = getGrandparent(z);
                    }
                    // Case 3: Uncle is BLACK, z is right child (Left Rotate)
                    setColor(parent, "BLACK");
                    setColor(gparent, "RED");
                    leftRotate(gparent);
                }
            }
        }
        if (root != null) root.color = "BLACK";
    }

    
    
    RBNode insertRec(RBNode node, int key, RBNode parentNode) {
        if (node == null) {
            RBNode newNode = new RBNode(key);
            newNode.parent = parentNode;
            this.newNodeReference = newNode; // Store the node to fix it later
            return newNode;
        }
        
        if (key < node.key) {
            node.left = insertRec(node.left, key, node);
        } else if (key > node.key) {
            node.right = insertRec(node.right, key, node);
        }
        return node;
    }
    
    public void insert(int key) {
        newNodeReference = null;
        root = insertRec(root, key, null);
        // CRITICAL: We pass the NEW node to fixup, not the root!
        if (newNodeReference != null) {
            insertFixup(newNodeReference);
        }
    }
    
    boolean search(RBNode node, int key) {
        if (node == null) return false;
        if (key == node.key) return true;
        return key < node.key ? search(node.left, key) : search(node.right, key);
    }
}

public class p13 {
    static List<Integer> generateRandomKeys(int N) {
        Random rand = new Random();
        Set<Integer> set = new HashSet<>();
        while (set.size() < N) {
            set.add(rand.nextInt(100000)); // Increased range to avoid collisions
        }
        return new ArrayList<>(set);
    }
    
    public static void main(String[] args) {
        int[] Ns = {100, 200, 300, 400, 500};
        System.out.println("N\tHeight\tLeftRot\tRightRot\tAvgSearchTime(ns)");
        System.out.println("------------------------------------------------------------");
        
        for (int N : Ns) {
            RedBlackTree rbt = new RedBlackTree();
            RedBlackTree.leftRotations = 0;
            RedBlackTree.rightRotations = 0;
            
            List<Integer> keys = generateRandomKeys(N);
            for (int key : keys) {
                rbt.insert(key);
            }
            
            int height = rbt.height(rbt.root);
            Random rand = new Random();
            int searches = 1000;
            long start = System.nanoTime();
            for (int i = 0; i < searches; i++) {
                int key = keys.get(rand.nextInt(keys.size()));
                rbt.search(rbt.root, key);
            }
            long end = System.nanoTime();
            double avgSearchTime = (end - start) / (double) searches;
            
            System.out.printf("%d\t%d\t%d\t%d\t\t%.1f\n", N, height, 
                RedBlackTree.leftRotations, RedBlackTree.rightRotations, avgSearchTime);
        }
    }
}