class AddTwoNumbers {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode result = new ListNode(0);
        ListNode list1 = l1, list2 = l2, currentList = result;
        int currentVal, div = 0;
        while (list1 != null || list2 != null) {
            int list1Val = list1 == null ? 0 : list1.val;
            int list2Val = list2 == null ? 0 : list2.val;

            currentVal = list1Val + list2Val + div;
            div = currentVal / 10;
            currentList.next = new ListNode(currentVal % 10);
            currentList = currentList.next;
            
            if (list1 != null) {
                list1 = list1.next;
            }
            
            if (list2 != null) {
                list2 = list2.next;
            }
        }
        
        if (div > 0) {
            currentList.next = new ListNode(div);
        }
        
        return result.next;
    }
}