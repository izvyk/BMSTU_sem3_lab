function show_page_tree(element=document.body, depth=0) {
    var tree = document.getElementById("tree");
    tree.append('\xa0'.repeat(depth * 4) + element.nodeName + '\n');  
    element.childNodes.forEach(function (i) {
        if (i.id != "tree-container") {
            show_page_tree(i, depth + 1);
        }
    })
    if (element.nodeType == 1)
        tree.append('\xa0'.repeat(depth * 4) + '/' + element.nodeName + '\n');
}

function show_tree_btn_disable() {
    document.getElementById("show-tree-btn").disabled = true;
}

