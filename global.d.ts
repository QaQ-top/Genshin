declare module 'memoryjs' {

  /**
   * 进程对象
   */
  type Processes = {
    /** 线程 */
    cntThreads: number;
    /** 进程文件名称 */
    szExeFile: string;
    /** 进程id */
    th32ProcessID: number;
    /** 父进程id */
    th32ParentProcessID: number;
    pcPriClassBase: 8;
  }

  /**
   * 模块对象
   */
   type Module = {
    /** 模块地址 */
    modBaseAddr: number;
    /** 模块大小 */
    modBaseSize: number;
    /** 模块进程文件地址 */
    szExePath: string;
    /** 模块文件名称 */
    szModule: string;
    /** 进程id */
    th32ProcessID: number;
    /** 模块id */
    hModule: number;
  }

  /**
   * 处理对象
   */

  interface Handle extends Processes {
    dwSize: number;
    modBaseAddr: Module['modBaseAddr'],
    handle: number;
  }

  /**
   * 结果对象
   */

  type Value = { returnValue: number, exitCode: 2 }

  type DataType = "byte" |  "int" | "int32" | "uint32" | "int64" | "uint64" | "dword" | "short" | "long" | "float" | "double" | "bool" | "boolean" | "ptr" | "pointer" | "str" | "string" | "vec3" | "vector3" | "vec4" | "vector4"

  const Memory : {
    /** 获取全部进程 */
    getProcesses: (fn: (error: Error | null, proc: Processes[]) => void) => void,
    /** 获取模块 */
    findModule: (name: Module['szModule'], id: Processes['th32ProcessID'], fn: (error: Error | null, mod: Module) => void) => void,
    /** 获取全部模块 */
    getModules: (id: Processes['th32ProcessID'], fn: (error: Error | null, mods: Module[]) => void) => void,
    /** 读取内存 */
    readMemory: (handle: Handle, address: Module['modBaseAddr'], dataType: DataType, fn: (error: Error | null, value: Value) => void) => void,
    /** 读取内存缓冲区 */
    readBuffer: (handle: Handle, address: Module['modBaseAddr'], size: number, fn: (error: Error | null, value: Value) => void) => void,
  }

  export default Memory
}