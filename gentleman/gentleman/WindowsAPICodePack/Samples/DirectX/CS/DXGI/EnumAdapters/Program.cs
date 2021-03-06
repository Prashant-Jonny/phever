// Copyright (c) Microsoft Corporation.  All rights reserved.

using Microsoft.WindowsAPICodePack.DirectX.DXGI;
using System;
using Microsoft.WindowsAPICodePack.DirectX.Direct3D;

namespace EnumAdapters
{
    class Program
    {
        static void Main(string[] args)
        {
            DXGIFactory factory = DXGIFactory.CreateFactory();

            Console.WriteLine("Adapter(s) Information:");
            foreach (Adapter adapter in factory.GetAdapters())
            {
                AdapterDescription description = adapter.Description;

                Console.WriteLine("Description: {0} ", description.Description);
                Console.WriteLine("\tDedicated System Memory: {0} ", description.DedicatedSystemMemory);
                Console.WriteLine("\tDedicated Video Memory: {0} ", description.DedicatedVideoMemory);
                Console.WriteLine("\tLuid: {0:X}:{1:X} ", description.AdapterLuid.HighPart, description.AdapterLuid.LowPart);
                Console.WriteLine("\tDevice Id: {0:X} ", description.DeviceId);
                Console.WriteLine("\tRevision: {0:X} ", description.Revision);

                Console.WriteLine();
                Console.WriteLine("\tSupports Direct3D 11.0 Device: {0}", adapter.CheckDeviceSupport(DeviceType.Direct3D_11_0));
                Console.WriteLine("\tSupports Direct3D 10.1 Device: {0}", adapter.CheckDeviceSupport(DeviceType.Direct3D_10_1));
                Console.WriteLine("\tSupports Direct3D 10.0 Device: {0}", adapter.CheckDeviceSupport(DeviceType.Direct3D_10_0));
                Console.WriteLine();

                Console.WriteLine("\tMonitor(s) Information:");
                foreach (Output output in adapter.GetOutputs())
                {
                    OutputDescription outDesc = output.Description;

                    Console.WriteLine("\tDevice Name: {0} ", outDesc.DeviceName);
                    Console.WriteLine("\t\tAttached To Desktop: {0} ", outDesc.AttachedToDesktop);
                    Console.WriteLine("\t\tRotation Mode: {0} ", outDesc.Rotation);
                    Console.WriteLine("\t\tMonitor Coordinates: Top: {0}, Left: {1}, Right: {2}, Bottom: {3} ", outDesc.Monitor.MonitorCoordinates.Top, outDesc.Monitor.MonitorCoordinates.Left, outDesc.Monitor.MonitorCoordinates.Right, outDesc.Monitor.MonitorCoordinates.Bottom);
                    Console.WriteLine("\t\tWorking Coordinates: Top: {0}, left: {1}, Right: {2}, Bottom: {3} ", outDesc.Monitor.WorkCoordinates.Top, outDesc.Monitor.WorkCoordinates.Left, outDesc.Monitor.WorkCoordinates.Right, outDesc.Monitor.WorkCoordinates.Bottom);
                }
            }
            Console.WriteLine("Press any key to continue...");
            Console.ReadKey();
        }
    }
}
