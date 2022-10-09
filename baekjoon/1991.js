const sol = (input) => {
  const [N, ...relation] = input;

  const tree = {};

  for (let i = 0; i < N; i++) {
    const [node, left, right] = relation[i];
    tree[node] = [left, right]; // tree의 키 값으로 노드를 저장하고, 값으로는 left, right가 담긴 배열을 저장한다.
  }

  let result = "";

  // 전위순회는 루트부터 기록을 시작하므로, 재귀의 맨 앞에서 우선 기록한다.
  function preorder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    result += node;
    preorder(lt);
    preorder(rt);
  }

  // 중위순회는 왼쪽-루트-오른쪽 순이므로, 왼쪽의 재귀가 끝난 시점에서 기록한다.
  function inorder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    inorder(lt);
    result += node;
    inorder(rt);
  }

  // 후위순회는 왼쪽-오른쪽-루트 순이므로, 왼쪽과 오른쪽 재귀가 끝난 시점에서 기록한다.
  function postorder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    postorder(lt);
    postorder(rt);
    result += node;
  }

  preorder("A");
  result += "\n";
  inorder("A");
  result += "\n";
  postorder("A");

  return result;
};

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    if (input.length === 0) {
      input.push(+line);
    } else {
      input.push(line.split(" "));
    }

    if (input.length > input[0]) {
      console.log(sol(input));
      process.exit();
    }
  });
