# Creating a Window

After creating a new project, the first step is initializing the window.

```c
#include <bs_core.h>

void render() {

}

int main() {
    bs_initWnd("WindowName", 800, 600);
    bs_startRender(render);
}
```
